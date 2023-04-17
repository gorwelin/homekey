import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from 'libs/shared/src/lib/property/src/lib/property-list/property-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AppComponent,
      },
      {
        path: 'properties',
        component: PropertyListComponent,
        data: {
          preload: true,
        },
      },

    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'disabled',
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
