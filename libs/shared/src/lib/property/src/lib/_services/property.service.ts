import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private configUrl = ""

  constructor(
    private readonly http: HttpClient,
  ) { }


  getProperties(): any {
    let url = "https://localhost:7175/api/Property";

    return this.http.get<any>(url);
  }
}
