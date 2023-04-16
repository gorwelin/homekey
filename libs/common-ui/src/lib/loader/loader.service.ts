import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public suppressFullPageLoader = false;
  public isModalLoader = false;
  public isMicroLoader = false;
  public showLoader = false;

  private requests: string[] = [];
  private marginOffset = 25; // 0.78125rem * 2
  private visibleModal: HTMLElement;
  private visibleOverlay: HTMLElement;
  private contentOverlay: HTMLElement;
  private mainElement: HTMLElement;
  private innerCard: HTMLElement;

  /**
   * Track requests
   * @param {string} endpoint The API endpoint being fed from the API service
   * @param {boolean} add Whether to add or remove the given key
   */
  public trackRequest(endpoint: string, add: boolean, addDelay: boolean = true): void {
    if (add && this.requests.indexOf(endpoint) < 0 && this.suppressFullPageLoader !== true) {
      this.requests.push(endpoint);
      setTimeout(
        () => {
          if (this.requests.length === 0) return;

          if (!this.suppressFullPageLoader && !this.isModalLoader) {
            this.mainElement = document.querySelector('main');
            if (this.mainElement) this.mainElement.style.position = 'relative';
          }
          this.showLoader = true;
          if (this.isModalLoader) {
            this.positionOverlayAboveModal();
          } else {
            this.contentOverlay = document.querySelector('.content-loader .overlay');
            if (this.contentOverlay) this.contentOverlay.style.display = 'inline-flex';
          }
        },
        addDelay ? 1000 : 0,
      );
    }

    if (!add && this.requests.indexOf(endpoint) >= 0) {
      this.requests.splice(this.requests.indexOf(endpoint), 1);
    }
    if (!add && this.requests.length === 0) {
      this.hideLoader();
    }
  }

  /**
   * Hide the loader
   */
  private hideLoader(): void {
    setTimeout(() => {
      if (!this.suppressFullPageLoader && !this.isModalLoader && this.mainElement) this.mainElement.style.position = '';
      if (this.isModalLoader) {
        this.resetOverlayPosition();
      } else if (this.contentOverlay) {
        this.contentOverlay.style.display = 'none';
      }

      this.showLoader = false;
    });
  }

  /**
   * Make sure loader overlay is layered exactly on top of the modal
   * Only used for modal-loader
   */
  public positionOverlayAboveModal(): void {
    this.visibleModal = document.querySelector('.modal-content');
    this.visibleOverlay = document.querySelector('.modal-loader .overlay');
    this.contentOverlay = document.querySelector('.content-loader .overlay');

    if (this.visibleModal && this.visibleOverlay && this.contentOverlay) {
      this.innerCard = this.visibleModal.querySelector('uc-card');
      const modalSizeAndPosition = this.visibleModal.getBoundingClientRect();
      const innerModalHeader = this.visibleModal.querySelector('.card-header');
      const targetWidth = innerModalHeader ? innerModalHeader.getBoundingClientRect().width : null;
      const targetLeft = innerModalHeader ? innerModalHeader.getBoundingClientRect().left : null;
      const cardPaddingBottom = getComputedStyle(this.innerCard).paddingBottom;

      this.visibleOverlay.style.width = targetWidth
        ? `${targetWidth}px`
        : `${Math.floor(modalSizeAndPosition.width - this.marginOffset)}px`;
      this.visibleOverlay.style.height = `${modalSizeAndPosition.height - parseInt(cardPaddingBottom, 10)}px`;
      this.visibleOverlay.style.left = targetLeft
        ? `${targetLeft}px`
        : `${Math.floor(modalSizeAndPosition.left + this.marginOffset / 2)}px`;
      this.contentOverlay.style.display = 'none';
    }
  }

  /**
   * Undo modal-loader styles
   */
  public resetOverlayPosition(): void {
    if (this.visibleOverlay && this.contentOverlay) {
      this.visibleOverlay.style.width = 'unset';
      this.visibleOverlay.style.height = 'unset';
      this.visibleOverlay.style.left = 'unset';
      this.contentOverlay.style.display = '';
    }
  }
}
