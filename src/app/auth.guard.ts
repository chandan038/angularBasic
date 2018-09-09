import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { LoginService } from './shared/login.service';
import { map } from 'rxjs/operators';

var token: string;
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private loginService : LoginService, private route: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if(localStorage.getItem('token')){
         return true;
      }else{
        this.route.navigate(['login']);
      }
  }
}
