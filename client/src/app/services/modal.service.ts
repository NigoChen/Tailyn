import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: Subject<boolean>;

  constructor() {
    this.modal = new Subject<boolean>();
  }

  public get_modal(): Observable<boolean> {
    return this.modal.asObservable();
  }

  public set_modal(value: boolean): void {
    this.modal.next(value);
  }
}
