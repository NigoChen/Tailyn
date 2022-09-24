import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(
    component: DashboardComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // console.log('LeaveGuard');
      // console.log(currentRoute.params);
      // console.log(currentState.url);
      
      return component.canDeactivate || window.confirm('Are u sure??');
  }
  
}
