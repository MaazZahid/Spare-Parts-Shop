import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()

export class AuthService {

  dbUser: object;
  baseURL = "http://localhost:3000";
 loggedInState: boolean=false;
 
  constructor(private http:HttpClient , private router:Router , private route:ActivatedRoute) 
  {
    
  }

  login() {
  
    this.loggedInState = true;
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);

    return this.http.get(this.baseURL+"/login");
  }
  logout() {
    this.loggedInState = false;
    return this.router.navigate(['']);
  }
}
