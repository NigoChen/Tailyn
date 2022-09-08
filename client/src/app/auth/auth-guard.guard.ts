import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {      

    const user = this.loginService.read_User_SessionStorage();
            
    if(user != null)
    {
      if(Object.keys(user).length === 3)
      { 
        this.router.navigate(['/Tailyn']);
        return false;
      }
    }
    return true;
  }
  
}
