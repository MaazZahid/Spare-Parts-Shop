import { Component, OnInit, Input } from '@angular/core';
import { ShippingService } from '../../services/shipping.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  {

  
  shipping ={};
  constructor(
    private shippingService:ShippingService , 
    private router:Router,
    private cartService:CartService
  ) 
  { 

  }

  placeOrder(shipping) {
    this.shipping = shipping;
    this.shippingService.saveShipping(shipping).subscribe();
    this.router.navigate(['order-success']);
    this.cartService.navbarQuantity = 0;
    
    }

}
