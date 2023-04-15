import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PropertyListComponent],
  exports: [],
})
export class PropertyModule {}
