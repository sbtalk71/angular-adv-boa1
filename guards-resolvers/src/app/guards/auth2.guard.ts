import { inject, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn:'root'})
export class AuthGuard2 implements CanActivate {

  constructor(private auth:AuthService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      //inject(Router).navigate(['login'])
      return false;
    }
  }

};
