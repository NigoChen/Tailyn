import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterSortService {

  private data: Subject<Array<any>>;

  constructor() {
    this.data = new Subject<Array<any>>();
  }

  set_data_(arr: Array<any>) {
    this.data.next(arr);
  }

  get_data_(): Observable<Array<any>> {
    return this.data.asObservable();
  }
}
