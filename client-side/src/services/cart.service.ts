import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Product } from '../models/product.model';
//import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = "http://localhost:3000/api/product/";
  navbarQuantity:any=0;
  constructor(private http:HttpClient) 
  { 
      this.getTotalQuantity().subscribe(res=>{
      this.navbarQuantity = JSON.stringify(res[0]).slice(17,18);
    })
  }
  private getCart(cartId){
    return this.http.get("http://localhost:3000/api/shopping-cart/" +cartId);
  }
   
  private createCart(){
   return this.http.post("http://localhost:3000/api/shopping-cart" , { cartId: new Date().getTime() });
  }
   
   private getOrCreateCartId(){
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;
    
    this.createCart().subscribe(res=>{
    localStorage.setItem('cartId' , res[0].cartid);
    return res[0].cartid;
    })
    
    
  }

  addToCart(product:Product){
    let cart = this.getOrCreateCartId();
  }

  increaseQuantity(product: Product){
    this.navbarQuantity++;
    product.quantity++;
    return this.http.put(this.url + "incQuantity/" + product.id, product);
  }
  decreaseQuantity(product:Product){
    if(product.quantity > 0)
    {
      this.navbarQuantity--;
      product.quantity--;
      return this.http.put(this.url + "decQuantity/" + product.id, product);
    }
    }
    
  getAQuantity(product:Product){
    return this.http.get(this.url + "getQuantity/" +product.id);
  }

  getTotalQuantity(){
    return this.http.get(this.url + "getTotalQuantity");
  }

  addItem(product:Product):Observable<Product>{
    return this.http.post<Product>("http://localhost:3000/api/addSelectedItems/",product);
  }
  getItems(): Observable<any>{
    return this.http.get("http://localhost:3000/api/getSelectedItems/");
  }
  updateItem(product:Product){
    return this.http.put("http://localhost:3000/api/updateSelectedItems/"+product.id , product);
  }
  deleteItem(productId){
    return this.http.delete("http://localhost:3000/api/deleteSelectedItems/"+productId);
  }
  deleteAllItems(){
    return this.http.delete("http://localhost:3000/api/deleteAllItems");
  }
}
