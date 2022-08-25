import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService:LoginService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {      

    const user = this.loginService.read_User_LocalStorage();
    
    if(user != null)
    {
      if(Object.keys(user).length === 3)
      { 
        this.router.navigate(['/Tailyn/Dashboard']);
        return false;
      }
    }
    return true;
  }
  
}
