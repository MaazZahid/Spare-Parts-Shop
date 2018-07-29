import { CartService } from '../../services/cart.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

   export class ShoppingCartComponent{
    
    items:Item[] = [];
    totalPrice:number =0;
    constructor(private productService:ProductService , private cartService:CartService) 
    { 
       cartService.getItems().subscribe(res=>{
         this.items = res;
         for(let i=0 ; i<res.length ; i++){
            this.totalPrice += res[i].price * res[i].quantity;
         }
       });
       
    }
    // clearCart(){
    //   this.cartService.deleteAllItems().subscribe(res=>{
    //     console.log("DELETED!")
    //   });
    // }
    
    
}
  
  
   
  

