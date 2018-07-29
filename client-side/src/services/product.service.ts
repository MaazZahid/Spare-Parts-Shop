

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
 
  Product: Product[];
  constructor(private http:HttpClient) 
  {
   
  }
  private url = "http://localhost:3000/api/product/";

    getProducts() :Observable<any>
    {
     return this.http.get(this.url);
    }

    getCategories(){
      return this.http.get(this.url + "categories");
    }

    getAProduct(productId): Observable<any> {
      return this.http.get(this.url + productId);
    }

    createProduct(Product){
     return this.http.post(this.url,Product);
    }

    updateProduct(productId , Product){
     return this.http.put(this.url + productId , Product);
    }

    deleteProduct(productId){
      return this.http.delete(this.url + productId);
    }
  
  }
  


