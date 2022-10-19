import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {

      if ([401, 403, 404].indexOf(err.status) !== -1) {
          // this.authenticationService.logout();
          console.log('error');
          // location.reload();
      }

      const error = err.error.message || err.statusText;
      return throwError(() => error);
    }));
  }
}
