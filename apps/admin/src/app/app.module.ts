import { PropertyService } from '@homekey/shared/src/lib/property';
import { CommonUiModule } from '@homekey/common-ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedModule } from '@homekey/shared';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    SharedModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
