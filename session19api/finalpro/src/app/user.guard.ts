import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      if(!localStorage.getItem('me')){
        this.router.navigate(['login'],{queryParams:{returedFrom: route.url}})
return false

      }

    return true;
  }
  
}
