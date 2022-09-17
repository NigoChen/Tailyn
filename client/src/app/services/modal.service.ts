import { Injectable, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: Subject<boolean>;
  private formControls: Subject<object>;
  private fbGroup: Subject<FormGroup>;
  private form: Subject<TemplateRef<any>>;
  private close: Subject<Function>;
  private submit: Subject<Function>;

  constructor() {
    this.modal = new Subject<boolean>();
    this.formControls = new Subject<object>();
    this.fbGroup = new Subject<FormGroup>();
    this.form = new Subject<TemplateRef<any>>();
    this.close = new Subject<Function>();
    this.submit = new Subject<Function>();
  }

  public get_modal(): Observable<boolean> {
    return this.modal.asObservable();
  }

  public set_modal(value: boolean): void {
    this.modal.next(value);
  }

  // Get FormControls
  public get_FormControls(): Observable<object> {    
    return this.formControls.asObservable();
  }
  
  // Set FormControls
  public set_FormControls(controls: object): void {    
    this.formControls.next(controls);
  }

  // Get FormGroup
  public get_FormGroup(): Observable<FormGroup> {    
    return this.fbGroup.asObservable();
  }
  
  // Set FormGroup
  public set_FormGroup(formGroup: FormGroup): void {    
    this.fbGroup.next(formGroup);
  }

  // Get Form
  public get_Form(): Observable<TemplateRef<any>> {    
    return this.form.asObservable();
  }
  
  // Set Form
  public set_Form(templateRef: TemplateRef<any>): void {    
    this.form.next(templateRef);
  }

  // Get Form
  public get_Submit(): Observable<Function> {    
    return this.submit.asObservable();
  }
  
  // Set Form
  public set_Close(func: Function): void {    
    this.close.next(func);
  }

  // Get Form
  public get_Close(): Observable<Function> {    
    return this.close.asObservable();
  }
  
  // Set Form
  public set_Submit(func: Function): void {    
    this.submit.next(func);
  }
}
