import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Urls } from '../configs/url.config';
import { Employee } from '../interfaces/employee';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: BehaviorSubject<Employee>;

  constructor(
              private http: HttpClient, 
              private loadingService: LoadingService)
              {
                this.user = new BehaviorSubject<Employee>(null);
              }

  private handleError(errorResponse: HttpErrorResponse)
  {
    // catchError
    const message: string = errorResponse.error instanceof ErrorEvent ? 'Clinet Error' : 'Server Error';
    // callback to subscribe error
    return throwError(() => message); 
  }

  // Login
  public login(user: object): Observable<boolean> {    
    return this.http.post<Employee[]>(Urls.login.login, user)
      .pipe(map((res: Employee[]) => {        
        if(res.length)
        {
          this.create_User_SessionStorage(res[0]);
          return true;
        }        
        return false;
      }), catchError(this.handleError));
  }

  // Update Password
  public update(user: object): Observable<boolean>
  {        
    return this.http.put<boolean>(Urls.login.update, user)
    .pipe(catchError(this.handleError));
  }

  // logout
  public logout(): void {
    this.loadingService.set_Dashboard_Loading(true);
    this.user.unsubscribe();
    this.delete_Time_SessionStorage();
    this.delete_User_SessionStorage();
  }

  // Send Email For User
  public send_Email(user: object): Observable<boolean> {
    return this.http.post<boolean>(Urls.login.email, user)
    .pipe(catchError(this.handleError));
  }

  // Create Time 5 minutes sessionStorage  
  public create_Time_SessionStorage(): void {
    const date_ = new Date();
    date_.setMinutes(date_.getMinutes() + 5);
    const time_ = date_.getTime().toString();
    sessionStorage.setItem('time', btoa(time_));
  }

  // Read Time sessionStorage
  public read_Time_SessionStorage(): number {

    let time_: any = sessionStorage.getItem('time');

    if(time_ != null)
    {
      const now_date = new Date().getTime();

      time_ = parseInt(atob(time_));

      if(time_ > now_date)
      {                
        const date_: number = (new Date(time_).getTime() - new Date().getTime());

        // var hours = Math.floor(diff / 1000 / 60 / 60);
        // diff -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(date_ / 1000 / 60);
        // diff -= minutes * 1000 * 60;
        // var seconds = Math.floor(diff / 1000);
        return minutes;
      }
    }

    this.delete_Time_SessionStorage();
    return 0;
  }
  
  // Delete Time sessionStorage
  private delete_Time_SessionStorage(): void {
    sessionStorage.removeItem('time');
  }

  // Create IP LocalStorage
  public user_Ip(): Observable<string> {
    return this.http.get<string>(Urls.ip)
    .pipe(map((data:any) => {

      if('ip' in data)
      {
        return data.ip;
      }

      return '';
    }),
    catchError(this.handleError));
  }
  
  // Create User sessionStorage
  public create_User_SessionStorage(employee: Employee): void {
    delete employee.e_PassWord;
    // encodeURI For Chinese
    sessionStorage.setItem('user', btoa(encodeURI(JSON.stringify(employee))));
  }

  // Read User SessionStorage
  public read_User_SessionStorage(): Employee | null{
    const user: any = sessionStorage.getItem('user');
    if(user)
    {
      this.user.next(JSON.parse(decodeURI(atob(user))));
    }
    return user && JSON.parse(decodeURI(atob(user)));
  }

  // Delete SessionStorage
  public delete_User_SessionStorage(): void {
    sessionStorage.removeItem('user');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
