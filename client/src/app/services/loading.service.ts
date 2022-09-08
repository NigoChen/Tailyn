import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private app_Loading: Subject<boolean>;
  private dashboard_Loading: Subject<boolean>;
  private is_Login: Subject<boolean>;

  constructor(){
    this.app_Loading = new Subject<boolean>();
    this.dashboard_Loading = new Subject<boolean>();
    this.is_Login = new Subject<boolean>();
  }

  set_App_Loading(value: boolean): void {
    if(value)
    {
      this.app_Loading.next(value);
    }
    else
    {
      setTimeout(() => {
        this.app_Loading.next(value);
      }, 600);
    }
  }

  get_App_Loading(): Observable<boolean> {
    return this.app_Loading.asObservable();
  }
  
  set_Dashboard_Loading(value: boolean): void {
    if(value)
    {
      this.dashboard_Loading.next(value);
    }
    else
    {
      setTimeout(() => {
        this.dashboard_Loading.next(value);
      }, 600);
    }
  }

  get_Dashboard_Loading(): Observable<any> {
    return this.dashboard_Loading.asObservable();
  }

  set_Login(value: boolean): void {
    setTimeout(() => {
      this.is_Login.next(value);
    }, 2000);
  }

  get_Login(): Observable<any> {
    return this.is_Login.asObservable();
  }
  
  clear_Loading(): void {
    this.app_Loading.next();
    this.dashboard_Loading.next();
  }
}
