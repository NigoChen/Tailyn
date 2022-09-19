import { Injectable, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalForm: Subject<Array<string>>;
  private modalSM: Subject<boolean>;
  private formControls: Subject<object>;
  private fbGroup: Subject<FormGroup>;
  private form: Subject<TemplateRef<any>>;
  // private close: Subject<Function>;
  private submit: Subject<Function>;
  private update: Subject<FormGroup>;
  private create: Subject<Function>;
  private read: Subject<boolean>;
  private delete: Subject<number>;
  private search: Subject<string>;
  private user_Profile: Subject<Function>;
  private result_Data: Subject<Array<any>>;
  private result_List: Subject<Array<any>>;

  constructor() {
    this.modalForm = new Subject<Array<string>>();
    this.modalSM = new Subject<boolean>();
    this.formControls = new Subject<object>();
    this.fbGroup = new Subject<FormGroup>();
    this.form = new Subject<TemplateRef<any>>();
    // this.close = new Subject<Function>();
    this.submit = new Subject<Function>();
    this.update = new Subject<FormGroup>();
    this.create = new Subject<Function>();
    this.read = new Subject<boolean>();
    this.delete = new Subject<number>();
    this.search = new Subject<string>();
    this.user_Profile = new Subject<Function>();
    this.result_List = new Subject<Array<any>>();
    this.result_Data = new Subject<Array<any>>();
  }

  public get_modalForm(): Observable<Array<string>> {
    return this.modalForm.asObservable();
  }

  public set_modalForm(value: Array<string>): void {
    this.modalForm.next(value);
  }

  public get_modalSM(): Observable<boolean> {
    return this.modalSM.asObservable();
  }

  public set_modalSM(value: boolean): void {
    this.modalSM.next(value);
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

  // Get Submit
  public get_Submit(): Observable<Function> {    
    return this.submit.asObservable();
  }

  // Set Submit
  public set_Submit(func: Function): void {    
    this.submit.next(func);
  }
  
  // Get Update
  public get_Update(): Observable<FormGroup> {    
    return this.update.asObservable();
  }

  // Set Update
  public set_Update(fg: FormGroup): void {    
    this.update.next(fg);
  }
  
  // Get Create
  public get_Create(): Observable<Function> {    
    return this.create.asObservable();
  }

  // Set Create
  public set_Create(func: Function): void {    
    this.create.next(func);
  }

  // Get Read
  public get_Read(): Observable<boolean> {    
    return this.read.asObservable();
  }

  // Set Read
  public set_Read(status: boolean): void {    
    this.read.next(status);
  }

  // Get Read
  public get_Delete(): Observable<number> {    
    return this.delete.asObservable();
  }

  // Set Read
  public set_Delete(id: number): void {    
    this.delete.next(id);
  }

  // Get Read
  public get_Search(): Observable<string> {    
    return this.search.asObservable();
  }

  // Set Read
  public set_Search(searchText: string): void {    
    this.search.next(searchText);
  }
  
  // Get Read
  public get_User_Profile(): Observable<Function> {    
    return this.user_Profile.asObservable();
  }

  // Set Read
  public set_User_Profile(func: Function): void {    
    this.user_Profile.next(func);
  }

  // Get Read
  public get_Result_List(): Observable<Array<any>> {    
    return this.result_List.asObservable();
  }

  // Set Read
  public set_Result_List(func: Array<any>): void {    
    this.result_List.next(func);
  }

  // Get Read
  public get_Result_Data(): Observable<Array<any>> {    
    return this.result_Data.asObservable();
  }

  // Set Read
  public set_Result_Data(func: Array<any>): void {    
    this.result_Data.next(func);
  }
  
  // Set Form
  // public set_Close(func: Function): void {    
  //   this.close.next(func);
  // }

  // // Get Form
  // public get_Close(): Observable<Function> {    
  //   return this.close.asObservable();
  // }
}
