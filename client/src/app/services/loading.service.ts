import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading: Subject<boolean>;

  constructor(){
    this.loading = new Subject<boolean>();
  }

  set_Loading(value: boolean): void {
    this.loading.next(value);
  }

  get_Loading(): Observable<any> {
    return this.loading.asObservable();
  }
  
  clear_Loading(): void {
    this.loading.next();
  }
}
