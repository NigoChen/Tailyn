import { Injectable, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { Modal } from '../interfaces/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: Subject<Modal>;
  private fbGroup: Subject<FormGroup>;
  private form: Subject<TemplateRef<any>>;
  private update: Subject<FormGroup>;
  private create: Subject<FormGroup>;
  private read: Subject<boolean>;
  private delete: Subject<number>;
  private search: Subject<string>;
  private user_Profile: Subject<Employee>;

  constructor() {
    this.modal = new Subject<Modal>();
    this.fbGroup = new Subject<FormGroup>();
    this.form = new Subject<TemplateRef<HTMLElement>>();
    this.update = new Subject<FormGroup>();
    this.create = new Subject<FormGroup>();
    this.read = new Subject<boolean>();
    this.delete = new Subject<number>();
    this.search = new Subject<string>();
    this.user_Profile = new Subject<Employee>();
  }

  public get_modal(): Observable<Modal> {
    return this.modal.asObservable();
  }

  public set_modal(value: Modal): void {
    this.modal.next(value);
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
  
  // Get Update
  public get_Update(): Observable<FormGroup> {    
    return this.update.asObservable();
  }

  // Set Update
  public set_Update(fg: FormGroup): void {    
    this.update.next(fg);
  }
  
  // Get Create
  public get_Create(): Observable<FormGroup> {    
    return this.create.asObservable();
  }

  // Set Create
  public set_Create(fg: FormGroup): void {    
    this.create.next(fg);
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
  public get_User_Profile(): Observable<Employee> {    
    return this.user_Profile.asObservable();
  }

  // Set Read
  public set_User_Profile(user: Employee): void {    
    this.user_Profile.next(user);
  }
}
