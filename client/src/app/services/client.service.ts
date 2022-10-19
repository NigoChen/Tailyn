import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Urls } from '../configs/url.config';
import { Client } from '../interfaces/client';

@Injectable()

export class ClientService {

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
  public read(): Observable<Client[]>
  {
    return this.http.get<Client[]>(Urls.client.read)
    .pipe(map(res => {      
      if(typeof res !== "object")
      {
        return [];
      }
      return res;
    }),shareReplay(1),catchError(this.handleError));
  }

  // Create
  public create(Client: Client): Observable<boolean>
  {        
    return this.http.post<boolean>(Urls.client.create, Client)
    .pipe(catchError(this.handleError));
  }

  // Update
  public update(Client: Client): Observable<boolean>
  {        
    return this.http.put<boolean>(Urls.client.update, Client)
    .pipe(catchError(this.handleError));
  }

  // Delete
  public delete(id: number): Observable<boolean>
  {    
    return this.http.delete<boolean>(`${Urls.client.delete}/${id}`)
    .pipe(catchError(this.handleError))
  }
}
  