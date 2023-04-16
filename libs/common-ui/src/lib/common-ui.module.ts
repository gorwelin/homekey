import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { LoaderComponent } from './loader/loader/loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent, LoaderComponent],
  exports: [BannerComponent],
})
export class CommonUiModule {}
