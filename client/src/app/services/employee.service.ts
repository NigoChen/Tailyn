import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Urls } from './../configs/url.config';
import { Employee } from './../interfaces/employee';

@Injectable()

export class EmployeeService {

  public employee: BehaviorSubject<Employee[]>;

  constructor(private http: HttpClient) {
    this.employee = new BehaviorSubject<Employee[]>([]);
  }
  
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
  public read(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(Urls.employee.read)
      .pipe(map((res: Employee[]) => {
        this.employee.next(res);
        return res;
      }),shareReplay(1),catchError(this.handleError));
  }

  // Create
  public create(employee: Employee): Observable<boolean>
  {        
    return this.http.post<boolean>(Urls.employee.create, employee)
    .pipe(catchError(this.handleError));
  }

  // Update
  public update(employee: Employee): Observable<boolean>
  {        
    return this.http.put<boolean>(Urls.employee.update, employee)
    .pipe(catchError(this.handleError));
  }

  // Delete
  public delete(id: number): Observable<boolean>
  {    
    return this.http.delete<boolean>(`${Urls.employee.delete}/${id}`)
    .pipe(catchError(this.handleError))
  }
}
