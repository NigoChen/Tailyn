import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { ClientService } from '../services/client.service';
import { LoadingService } from '../services/loading.service';
import { LoginService } from '../services/login.service';

@Injectable()

export class ChildGuard implements CanActivateChild {

  constructor(
              private loadingService: LoadingService,
              private loginService: LoginService,
              private router: Router){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.loadingService.set_Dashboard_Loading(true);

    const user: Employee | null = this.loginService.read_User_SessionStorage();

    if(user == null || (Object.keys(user).length < 5))
    {
      this.router.navigate(['/Login']);
      return false;
    }
    else if(user.e_Lv == 0)
    {
      this.loginService.logout();
      return false;
    }

    return true;
  }
}