import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonUiModule } from '@homekey/common-ui';
import { SharedModule } from '@homekey/shared';
import { PropertyService } from '@homekey/shared/src/lib/property';
import { IconLoaderModule, UtilsModule } from '@homekey/utils';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';

import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxPermissionsModule.forRoot(),
    CommonUiModule,
    SharedModule,
    AppRoutingModule,
    UtilsModule,
    MatTableModule,
    IconLoaderModule,
    FontAwesomeModule,
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
