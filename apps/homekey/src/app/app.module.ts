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
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
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
