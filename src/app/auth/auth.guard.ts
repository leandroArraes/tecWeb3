import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    let isAutheticated = this.authService.isAutheticated();

    if(isAutheticated){
      return true
    }
      this.router.navigate(['login'])
      return false
  }

  constructor(private authService:AuthService,private router:Router){}
  //  por padrão eu deixo o return em false
}
