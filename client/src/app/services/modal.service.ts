import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: Subject<boolean>;
  private form: Subject<TemplateRef<any>>;

  constructor() {
    this.modal = new Subject<boolean>();
    this.form = new Subject<TemplateRef<any>>();
  }

  public get_modal(): Observable<boolean> {
    return this.modal.asObservable();
  }

  public set_modal(value: boolean): void {
    this.modal.next(value);
  }

  // Get Form
  public get_Form(): Observable<TemplateRef<any>> {    
    return this.form.asObservable();
  }
  
  // Set Form
  public set_Form(templateRef: TemplateRef<any>): void {
    this.form.next(templateRef);
  }
}
