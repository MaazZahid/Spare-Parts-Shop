import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{
  
  constructor(private authService:AuthService , private cartService:CartService) 
  {
    
  }

  logout(){
    this.authService.logout();
  }
}
