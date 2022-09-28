import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Stand } from '../interfaces/stand';
import { Urls } from './../configs/url.config';

@Injectable()

export class StandService {

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
  public read(): Observable<Stand[]>
  {
    return this.http.get<Stand[]>(Urls.stand.read)
    .pipe(map(res => {
      if(typeof res !== "object")
      {
        return [];
      }
      return res;
    }),shareReplay(1),catchError(this.handleError));
  }

  // Create
  public create(Stand: Stand): Observable<boolean>
  {        
    return this.http.post<boolean>(Urls.stand.create, Stand)
    .pipe(catchError(this.handleError));
  }

  // Update
  public update(Stand: Stand): Observable<boolean>
  {        
    return this.http.put<boolean>(Urls.stand.update, Stand)
    .pipe(catchError(this.handleError));
  }

  // Delete
  public delete(id: number): Observable<boolean>
  {    
    return this.http.delete<boolean>(`${Urls.stand.delete}/${id}`)
    .pipe(catchError(this.handleError))
  }
}
  