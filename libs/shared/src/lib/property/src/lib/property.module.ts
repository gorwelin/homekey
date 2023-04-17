import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PropertyListComponent } from './property-list/property-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatTableModule],
  declarations: [PropertyListComponent],
  exports: [],
})
export class PropertyModule {}
