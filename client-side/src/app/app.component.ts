import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService:AuthService , private router:Router)
  {
    if(this.authService.loggedInState){
      let returnUrl = localStorage.getItem('returnUrl');

      if(returnUrl){
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
      
    }
  }
}
