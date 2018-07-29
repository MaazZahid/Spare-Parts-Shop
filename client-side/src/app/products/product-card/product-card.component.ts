import { Component, OnInit, Input, OnDestroy, Output ,EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';



@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input('product') product:Product;
  @Input('show-actions') showActions = true;

 // @Output() sendProduct: EventEmitter<any> = new EventEmitter();
  
  constructor( private cartService: CartService ,  private productService:ProductService) 
  {
    
  }

  addToCart(product)
  {   
    this.cartService.increaseQuantity(product).subscribe();
    if(product.quantity > 1)
    {
      this.cartService.updateItem(product).subscribe();
    }
    else{
      this.cartService.addItem(product).subscribe();
    }  
    //this.sendProduct.emit();
  }
  removeFromCart(product){
    this.cartService.decreaseQuantity(product).subscribe();
    if(product.quantity < 1){
      this.cartService.deleteItem(product.id).subscribe();
    }
    else{
      this.cartService.updateItem(product).subscribe();
    }
  }
  
}
