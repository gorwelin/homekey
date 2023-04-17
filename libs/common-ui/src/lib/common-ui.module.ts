import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { LoaderComponent } from './loader/loader.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavItemComponent } from './top-nav/nav-item/nav-item.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';

import { IconLoaderModule } from '@homekey/utils';
import { IconComponent } from './icon/icon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, BrowserModule, IconLoaderModule, RouterModule],
  declarations: [
    BannerComponent,
    LoaderComponent,
    TopNavComponent,
    NavItemComponent,
    IconComponent,
  ],
  exports: [
    BannerComponent,
    LoaderComponent,
    TopNavComponent,
    NavItemComponent,
    IconComponent,
    NavItemComponent,
  ],
})
export class CommonUiModule {}
