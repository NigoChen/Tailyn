import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { WorkHours } from '../interfaces/work-hours';
import { Urls } from './../configs/url.config';

@Injectable()

export class WorkHoursService {

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
  public read(): Observable<WorkHours[]>
  {
    return this.http.get<WorkHours[]>(Urls.workHours.read)
    .pipe(map(res => {
      if(typeof res !== "object")
      {
        return [];
      }
      return res;
    }),shareReplay(1),catchError(this.handleError));
  }

  // Find One
  public findOne(user: object): Observable<WorkHours[]>
  { 
    const jString = JSON.stringify(user);
    return this.http.get<WorkHours[]>(`${Urls.workHours.findOne}/${jString}`)
   .pipe(catchError(this.handleError));
  }

  // Find Like
  public findLike(WorkHours: string): Observable<WorkHours[]>
  { 
    return this.http.get<WorkHours[]>(`${Urls.workHours.findLike}/${WorkHours}`)
   .pipe(catchError(this.handleError));
  }

  // Create
  public create(WorkHours: WorkHours): Observable<boolean>
  {        
    return this.http.post<boolean>(Urls.workHours.create, WorkHours)
    .pipe(catchError(this.handleError));
  }

  // Update
  public update(WorkHours: WorkHours): Observable<boolean>
  {        
    return this.http.put<boolean>(Urls.workHours.update, WorkHours)
    .pipe(catchError(this.handleError));
  }

  // Delete
  public delete(id: number): Observable<boolean>
  {    
    return this.http.delete<boolean>(`${Urls.workHours.delete}/${id}`)
    .pipe(catchError(this.handleError))
  }
}
