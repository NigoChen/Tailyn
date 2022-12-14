import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/interfaces/alert';
import { Employee } from 'src/app/interfaces/employee';
import { User } from 'src/app/interfaces/user';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { PasswordMatch } from 'src/app/methods/password-match';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
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

  // User
  public user: User;

  // FormGroup
  public fbGroup: FormGroup = this.fb.group(
      {
      e_Id: [''],
      e_Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
      e_JobNumber: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,5}$/)]],
      e_PassWord: ['', [Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]],
      e_ConfirmPassword: ['', [Validators.required]],
      e_Email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      e_Lv: ['', [Validators.required, Validators.maxLength(1)]]
    },
    {
      updateOn: 'blur',
      validators: [PasswordMatch]
    }
  );

  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;

  // Alerts
  public alert: Alert;

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;


  constructor(
    private loadingService: LoadingService,
    private loginService : LoginService,
    private employeeService: EmployeeService, 
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inputValidators(this.fbGroup);
    this.result_Data = [];
    this.result_List = [];
    this.user = { jNumber: '', name: '', lv: 1};
    this.alert = { status: true, type: 'danger', message: '...'};
    this.read();
  }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // Reset Validators
  reset_Validators(): void {
    Reset_Validators(this.fbGroup);
  }

  // User Profile
  user_Profile(employee: Employee[]): void {

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
    this.fbGroup.reset();
    this.reset_Validators();      
    this.fb_Value['e_ConfirmPassword'].setValidators([Validators.required]); 
    this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
    this.fb_Value['e_Lv'].patchValue('1');
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
            // this.error_Alert_Toggle(this.f['e_JobNumber'].value+'??????????????????');
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
  refresh(): void {

  }

  // Search
  search(): void {}

  // Update
  update(): void {
    this.fb_Value['e_ConfirmPassword'].clearAsyncValidators();
    this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
  }

  // Delete
  delete(): void {}

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

      this.modal.close();
    }
  }
}