import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { LoginService } from '../services/login.service';

@Injectable()

export class ChildGuard implements CanActivateChild {

  constructor(private loginService: LoginService, private loadingService: LoadingService, private router: Router) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.loadingService.set_Dashboard_Loading(true);

    const user = this.loginService.read_User_SessionStorage();
    
    if ((user == null) || (Object.keys(user).length < 3))
    {
      this.router.navigate(['/Login']);
      
      return false;
    }

    return true;
  }
}