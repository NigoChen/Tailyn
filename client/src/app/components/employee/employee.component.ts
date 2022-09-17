import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { User } from 'src/app/interfaces/user';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { passwordMatchValidator } from 'src/app/methods/password-Match-Validator';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  // Modal
  @ViewChild(ModalComponent) private modal: ModalComponent;
  // Employee Data
  public result_Async$: Observable<Array<Employee>> | Observable<[]>;
  public result_Data: Employee[];
  public result_List: Employee[];

  @ViewChild('form_') form_: TemplateRef<any>;

  // User
  public user: User;
  // Form Controls
  public form_Controls: object = {
    e_Id: [''],
    e_Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
    e_JobNumber: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,5}$/)]],
    e_PassWord: ['', [Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]],
    e_ConfirmPassword: ['', [Validators.required]],
    e_Email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    e_Lv: ['1', [Validators.required, Validators.maxLength(1)]]
  }
  // FormGroup
  public fbGroup: FormGroup = this.fb.group(
      this.form_Controls,
    {
      updateOn: 'blur',
      validators: [passwordMatchValidator]
    }
  );

  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;

  constructor(
    private loadingService: LoadingService,
    private loginService : LoginService,
    private employeeService: EmployeeService, 
    private fb: FormBuilder,
    private modalService: ModalService,
    ) {}

  ngOnInit(): void {
    Reset_Validators(this.fbGroup);
    this.result_Data = [];
    this.result_List = [];
    this.read();
  }

  ngAfterViewInit(): void {
    this.modalService.set_FormControls(this.form_Controls);
    this.modalService.set_FormGroup(this.fbGroup);
    this.modalService.set_Form(this.form_);            
    this.modalService.set_Submit(this.onSubmit);            
  }

  // ngAfterViewChecked(): void {
  //   console.log(this.form_);
  // }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // User Profile
  user_Profile(employee: Employee[]): void {

    this.user = { jNumber: '', name: '', lv: 1};

    let user_Session: User | null = this.loginService.read_User_SessionStorage();
  
    if(user_Session != null)
    {
      const userData = employee.find((item: Employee, index: number) => item.e_JobNumber === user_Session!.jNumber);      

      if(userData != undefined)
      {  
        this.loginService.create_User_SessionStorage(userData);
        
        this.user = {
          jNumber: userData.e_JobNumber,
          name: userData.e_Name,
          lv: userData.e_Lv
        }
      }
      else
      {
        this.loginService.logout();
      }
    }
  }
  
  // Open
  open(): void {
    this.modal.open();
    // this.fbGroup.reset();
    // Reset_Validators(this.fbGroup);    
    // this.fb_Value['e_ConfirmPassword'].setValidators([Validators.required]); 
    // this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
    // this.fb_Value['e_Lv'].patchValue('1');
  }

  // Create
  create(): void {

    this.employeeService.create(this.fbGroup.value)
    .subscribe(
      {
        next: (res:boolean) => {
          if(res)
          {
            this.read();
          }
          else
          {
            // this.error_Alert_Toggle(this.f['e_JobNumber'].value+'帳號已被使用');
          }

          // this.stateView.next({loading: false, error: false});
        },
        error: (err) => {
          // this.stateView.next({loading: true, error: true});
        }
      }
    );
  }

  // Read
  read(): void {
    // this.employeeAsync$ = this.employeeService.read();
    this.employeeService.read()
    .subscribe(
      {
        next: (res: Employee[]) => { 
          if(res.length)
          {
            // const arr = res[0].e_Inventory.split(',').filter(Boolean);
            this.result_Async$ = this.employeeService.read();
            this.result_Data = res;
            this.result_List = res;
            this.user_Profile(res);
          }
        },
        error: (err) => {
          // this.stateView.next({loading: true, error: true});
        },
        complete: () => {
          this.loadingService.set_Dashboard_Loading(false);          
        }
      }
    );
  }
  
  // Refresh
  refresh(): void {}

  // Search
  search(): void {}

  // Update
  update(): void {
    this.fb_Value['e_ConfirmPassword'].clearAsyncValidators();
    this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
  }

  // Delete
  delete(): void {
  }

  // Submit
  onSubmit(): void {    
    
    if(this.fbGroup.valid)
    {
      if(this.fb_Value['e_Id'].value)
      {
        this.update();
      }
      else
      {      
        this.create();
      }
    }
  }
}