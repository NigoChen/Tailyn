import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../interfaces/employee';
import { LoginService } from '../services/login.service';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(
              private loginService: LoginService, 
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {    
      
    const user: Employee | null = this.loginService.read_User_SessionStorage();

    if(user)
    {      
      if(Object.keys(user).length === 6)
      { 
        this.router.navigate(['/Tailyn']);
        
        return false;
      }
    }

    return true;
  }
}
