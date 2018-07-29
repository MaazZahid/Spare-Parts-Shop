import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  
  
  constructor(private authService:AuthService,private router:Router)
  {
    
  }
 login(user)
  {
    this.authService.login().subscribe(Response=>{
      this.authService.dbUser = Response;

      if(user.username == this.authService.dbUser[0].username &&
        user.password == this.authService.dbUser[0].password){
          this.router.navigate(['']);
        }
        else{
          alert('Invalid User.');
          this.router.navigate(['/login']);
        }

    });
  }
 }



