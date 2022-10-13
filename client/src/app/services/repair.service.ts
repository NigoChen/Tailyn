import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Urls } from '../configs/url.config';
import { Repair } from '../interfaces/repair';

@Injectable()

export class RepairService {

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
  public read(): Observable<Repair[]>
  {
    return this.http.get<Repair[]>(Urls.repair.read)
    .pipe(map(res => {
      if(typeof res !== "object")
      {
        return [];
      }
      return res;
    }),shareReplay(1),catchError(this.handleError));
  }

  // Find One
  public findOne(user: object): Observable<Repair[]>
  { 
    const jString = JSON.stringify(user);
    return this.http.get<Repair[]>(`${Urls.repair.findOne}/${jString}`)
   .pipe(catchError(this.handleError));
  }

  // Find Like
  public findLike(repair: string): Observable<Repair[]>
  { 
    return this.http.get<Repair[]>(`${Urls.repair.findLike}/${repair}`)
   .pipe(catchError(this.handleError));
  }

  // Create
  public create(repair: Repair): Observable<boolean>
  {        
    return this.http.post<boolean>(Urls.repair.create, repair)
    .pipe(catchError(this.handleError));
  }

  // Update
  public update(repair: Repair): Observable<boolean>
  {        
    return this.http.put<boolean>(Urls.repair.update, repair)
    .pipe(catchError(this.handleError));
  }

  // Delete
  public delete(id: number): Observable<boolean>
  {    
    return this.http.delete<boolean>(`${Urls.repair.delete}/${id}`)
    .pipe(catchError(this.handleError))
  }
}
