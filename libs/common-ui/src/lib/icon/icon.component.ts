import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition, IconName } from '@fortawesome/free-solid-svg-icons';
import { IconStyles } from './_models';
import { IconSize } from './_models/icon';

@Component({
  selector: 'homekey-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnChanges, AfterViewInit {
  @HostListener('mouseenter') handleMouseover(): void {
    if (this.hoverColor) {
      this.originalColor = this.styles['color'];

      // support actual colors and variables
      let colour;
      if (this.hoverColor.startsWith('--')) {
        const style = getComputedStyle(document.body);
        colour = style.getPropertyValue(this.hoverColor);
      } else {
        colour = this.hoverColor;
      }

      // need to manually update the SVG to make this work
      this.getSvgElement()?.setAttribute('style', `color: ${colour}`);
    }
  }

  @HostListener('mouseleave') handleMouseout(): void {
    if (this.originalColor) {
      this.getSvgElement()?.setAttribute('style', `color: ${this.originalColor}`);
    }
  }

  @Output() onInit: EventEmitter<null> = new EventEmitter();

  @Input() ariaLabel: string;
  @Input() sprite!: string;
  @Input() icon!: IconDefinition;
  @Input() showPointer: boolean;
  @Input() iconStyles: IconStyles;
  @Input() iconClasses: string[] = [];
  @Input() size: IconSize;
  @Input() fixedWidth = false;
  @Input() hoverColor: string;

  @Input()
  set color(color: string) {
    const style = getComputedStyle(document.body);
    this.styles['color'] = style.getPropertyValue(color);
    if (this.styles['color'] === '' && !!color) {
      this.styles['color'] = color;
    }
  }

  @Input() set title(title: string) {
    this._title = title;
  }

  get color(): string {
    return this._color;
  }

  private _color: string;
  private originalColor: string;
  private svgEl: SVGElement;

  public _ariaLabel: string;
  public _title: string;
  public ariaHidden: true;
  public styles: { [key: string]: string } = {};

  constructor(private el: ElementRef) {}

  public ngAfterViewInit(): void {
    // If an aria-label was provided, it means that this icon is more than just a
    // decorative element, so make it more accessible to screen-readers.
    if (this.ariaLabel) this._ariaLabel = this.ariaLabel;

    this.onInit.emit();
  }

  private getSvgElement(): SVGElement {
    if (!this.svgEl) {
      const result = this.el.nativeElement.querySelector('svg');
      this.svgEl = result;
    }
    return this.svgEl;
  }

  public ngOnChanges(): void {
    // To be removed when API updated for sprite names
    // API subtask is UC-25599
    if (this.sprite && this.sprite.length > 3) {
      this.sprite = `fa${this.sprite.charAt(0).toLowerCase()}`;
    }

    if (this.ariaLabel) {
      // If an aria-label was provided, it means that this icon is more than just a
      // decorative element, so make it more accessible to screen-readers.
      this.ariaHidden = null;
      this._ariaLabel = this.ariaLabel;
    } else {
      // If there is no title, hide this icon from screen-readers.
      this.ariaHidden = true;
      this._ariaLabel = null;
    }
    if (this.iconStyles) {
      this.styles = { ...this.styles, ...this.getStyles() };
    }
  }

  private getStyles(): { [key: string]: string } {
    const styles: { [key: string]: string } = {};
    const style = getComputedStyle(document.body);
    if (this.iconStyles) {
      if (this.iconStyles.backgroundColour) {
        styles['background-color'] = style.getPropertyValue(this.iconStyles.backgroundColour);
      }
      if (this.iconStyles.borderColour) {
        styles['border-color'] = style.getPropertyValue(this.iconStyles.borderColour);
      }
      if (this.iconStyles.radius) {
        styles['border-radius'] = this.iconStyles.radius;
      }
      if (this.iconStyles.style) {
        styles['border-style'] = this.iconStyles.style;
      }
      if (this.iconStyles.width) {
        styles['border-width'] = this.iconStyles.width;
      }
      if (this.iconStyles.size) {
        styles['width'] = this.iconStyles.size;
        styles['height'] = this.iconStyles.size;
      }
      // Used by the duotone FA icons for setting the colour
      if (this.iconStyles.faPrimaryColour) {
        styles['--fa-primary-color'] = this.iconStyles.faPrimaryColour;
      }
      if (this.iconStyles.faSecondaryColour) {
        styles['--fa-secondary-color'] = this.iconStyles.faSecondaryColour;
      }
    }

    return styles;
  }
}

