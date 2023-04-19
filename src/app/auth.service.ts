import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(router:Router) { }

  isAutheticated(){
    let flag = localStorage.getItem("logado");
    if(flag == 'true'){
      return true
    }
    return false;
  }

  deslogar(){
    localStorage.setItem('logado','false'),
    this.router.navigate(['login'])
  }
}
