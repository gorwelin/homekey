import { Component, OnInit } from '@angular/core';
import { Property } from '../_models';
import { PropertyService } from '../_services/property.service';

@Component({
  selector: 'homekey-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];
  displayedColumns: string[] = [ 'name', 'address', 'dateAdded', 'bedrooms', 'bathrooms', 'houseType', 'tenure', 'description']

  constructor(private propertyService: PropertyService) {

  }

  ngOnInit(): void {
    this.properties = this.getProperties();
    console.log(this.getProperties());
  }

  getProperties(): Property[] {
    let properties: Property[] = [];

    this.propertyService.getProperties().subscribe(
      (data: Property[]) => this.properties = data
    )

    return properties;
  }
}

