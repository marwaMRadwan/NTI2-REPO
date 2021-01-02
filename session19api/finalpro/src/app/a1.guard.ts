import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivateComponent{
canExit:()=>Observable<boolean>| Promise<boolean>|  boolean
}

@Injectable({
  providedIn: 'root'
})
export class A1Guard implements CanDeactivate<unknown> {
  
  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit?component.canExit():true;
  }
  
}
