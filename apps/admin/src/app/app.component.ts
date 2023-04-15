import { Component, OnInit } from '@angular/core';
import { exampleProducts} from '@homekey/products';
import { PropertyService } from '@homekey/shared/src/lib/property';
import { BannerComponent } from '@homekey/common-ui';
import { Property } from  '@homekey/shared/src/lib/property';

@Component({
  selector: 'homekey-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title: string = 'admin';
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
