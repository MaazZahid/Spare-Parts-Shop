import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  url = "http://localhost:3000/api/shipping/";
  constructor(private http:HttpClient) 
  {

  }
  saveShipping(Shipping){
    return this.http.post(this.url + "saveShipping",Shipping);
  }
}
