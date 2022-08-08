import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Urls } from '../configs/url.config';
import { Employee } from '../interfaces/employee';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse)
  {
    // catchError
    let message:string = '';

    if (errorResponse.error instanceof ErrorEvent)
    {
      message = 'Clinet Error';
    }
    else
    {
      message = 'Server Error';
    }
    // callback to subscribe error
    return throwError(() => message); 
  }

  // Read
  read(): Observable<Employee[]> {
    return this.http.get<Employee[]>(Urls.employee.read)
      .pipe(shareReplay(1), catchError(this.handleError));
  }

  // Find
  findOne(): Observable<Employee> {
    return this.http.get<Employee>(Urls.employee.findOne)
      .pipe(catchError(this.handleError));
  }

  // Login
  login(user: object): Observable<boolean> {
    return this.http.post<Employee[]>(Urls.employee.login, user)
      .pipe(map((res: Employee[]) => {
        if(res.length > 0)
        {
          this.create_User_LocalStorage(res[0]);
          return true;
        }        
        return false;
      }), catchError(this.handleError));
  }

  // Update
  update(user: object): Observable<boolean>
  {        
    return this.http.put<boolean>(Urls.employee.updatePassword, user)
    .pipe(catchError(this.handleError));
  }

  // logout
  logout(): void {
    this.delete_User_LocalStorage();
    this.delete_Time_LocalStorage();
  }

  // Send Email
  send_Email(user: object): Observable<boolean> {

    return this.http.post<boolean>(Urls.employee.email, user)
    .pipe(catchError(this.handleError));
  }

  // Read Time localStorage
  read_Time_LocalStorage(): any {
    return localStorage.getItem('time');
  }

  // Create Time localStorage
  create_Time_LocalStorage(): void {

    const date_ = new Date();

    date_.setMinutes(date_.getMinutes() + 5);

    const time_ = date_.getTime().toString();    

    localStorage.setItem('time', time_);
  }

  // Create IP LocalStorage
  user_Ip(): Observable<string> {

     return this.http.get<string>('http://api.ipify.org/?format=json')
    .pipe(map((data:any) => {

      if('ip' in data)
      {
        this.create_Time_LocalStorage();
        
        return data.ip;
      }

      return '';
    }),
    catchError(this.handleError));
  }

  // Check Time localStorage
  check_Time_LocalStorage(): number {

    let time_LocalStorage:any = this.read_Time_LocalStorage();

    if(time_LocalStorage != null)
    {
      const now_date = new Date().getTime();

      time_LocalStorage = parseInt(time_LocalStorage);

      if(time_LocalStorage > now_date)
      {                
        const counter:number = (new Date(time_LocalStorage).getMinutes() - new Date().getMinutes()) * 60;

        return counter;
      }
    }

    this.delete_Time_LocalStorage();

    return 0;
  }
  
  // Delete Time sessionStorage
  delete_Time_LocalStorage(): void {
    localStorage.removeItem('email');
  }

  // Create User sessionStorage
  create_User_LocalStorage(employee: Employee): void {
    const user: User = {
      jNumber: employee.e_JobNumber,
      name: employee.e_Name,
      lv: employee.e_Lv
    }

    // localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('user', btoa(JSON.stringify(user)));
  }

  // Read User localStorage
  read_User_LocalStorage(): User | null {
    
    let user = sessionStorage.getItem('user');
    
    if(user != null)
    {      
      return JSON.parse(atob(user));
    }
    return null; 
  }

  // Update User sessionStorage
  update_User_LocalStorage(user: User): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // Delete sessionStorage
  delete_User_LocalStorage(): void {
    sessionStorage.removeItem('user');
  }
}

