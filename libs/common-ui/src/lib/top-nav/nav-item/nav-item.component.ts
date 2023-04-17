import { Component, Input } from '@angular/core';
import { NavItemConfig } from '../_models/nav-item.config';

import { faBookOpen, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'homekey-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  bookOpen: IconDefinition = faBookOpen
  @Input() navItemConfig: NavItemConfig;
}
