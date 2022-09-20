import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { User } from 'src/app/interfaces/user';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { passwordMatchValidator } from 'src/app/methods/password-Match-Validator';
import { AlertService } from 'src/app/services/alert.service';
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

  // e_ConfirmPassword: [
  //   '', 
  //   {
  //     Validators:[
  //       Validators.required
  //     ],
  //     updateOn: 'blur',
  //     validators: [passwordMatchValidator]
  //   },
    
  // ],
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
    private alertService: AlertService
    ) {
      this.modalService.get_modalForm().subscribe(res => this.reset_FormGroup(res));
      this.modalService.get_Search().subscribe(res => this.search(res));
      this.modalService.get_Create().subscribe(res => this.create(res));
      this.modalService.get_Read().subscribe(res => this.read());
      this.modalService.get_Update().subscribe(res => this.update(res));
      this.modalService.get_Delete().subscribe(res => this.delete(res));
    }

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
    this.modalService.set_User_Profile(this.user_Profile);          
  }

  // ngAfterViewChecked(): void {
  //   console.log(this.form_);
  // }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string} {
    return Object.values(this.fbGroup.value) || '';
  }

  // FormGroup Reset
  reset_FormGroup(arr: Array<string>): void {   

    if(arr[0] == 'show')
    {
      if(arr[1] == 'insert')
      {
        Reset_Validators(this.fbGroup);
        this.fbGroup.reset({e_Lv: '1'});
      }
    }
    else
    {      
      this.fbGroup.reset();
    }
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
  
  // Create
  create(fg: FormGroup): void {

    this.employeeService.create(fg.value)
    .subscribe(
      {
        next: (res:boolean) => {
          if(res)
          {
            this.read();
            this.modalService.set_modalForm(['hide', 'create']);
          }
          else
          {
            this.alertService.set_Alert(22);
          }

        },
        error: (err) => {
          this.alertService.set_Alert(23);
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
            // this.result_Async$ = this.employeeService.read();
            this.result_Data = res;
            this.result_List = res;
            this.user_Profile(res);
          }
        },
        error: (err) => {
          this.alertService.set_Alert(13);
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
  // search(searchText: HTMLInputElement): void {
  search(searchText: string): void {

    this.result_List = [];

    for (let i = 0; i < this.result_Data.length; i++)
    {
      if (this.result_Data[i]['e_JobNumber'].includes(searchText) || this.result_Data[i]['e_Name'].includes(searchText))
      {
        this.result_List.push(this.result_Data[i]);
      }
    }    
  }

  // Update
  update(fg: FormGroup): void {

    delete fg.controls.e_ConfirmPassword;
    // const data: Employee = this.fb.control;
    
    this.employeeService.update(fg.value)
    .subscribe(
      {
        next: (res: boolean) => {
          if(res)
          {
            this.read();
            this.modalService.set_modalForm(['hide', 'update']);
            // this.rightModal.hide();
          }
          else
          {
            this.alertService.set_Alert(32);
            // this.error_Alert_Toggle(this.f['e_JobNumber'].value+'更新失敗');
          }

          // this.stateView.next({loading: false, error: false});
        },
        error: (err) => {
          this.alertService.set_Alert(33);
        },
        complete: () => {
          // this.stateView.next({loading: false, error: false});
        }
      }
    )
  }

  // Delete
  delete(id: number): void {
    this.employeeService.delete(id)
    .subscribe(
      {
        next: (res: boolean) => {
          if(res)
          {      
            this.read();
            this.modalService.set_modalForm(['hide', 'delete']);
          }
          else
          {
            this.alertService.set_Alert(42);
          }

          // this.stateView.next({loading: false, error: false});
        },
        error: (err) => {
          this.alertService.set_Alert(43);
        }
      }
    );
  }

  // choose
  choose(item: Employee): void {

    this.fbGroup.patchValue({
      e_Id: item.e_Id,
      e_Name: item.e_Name,
      e_JobNumber: item.e_JobNumber,
      e_Email: item.e_Email,
      e_Lv: item.e_Lv
    });

    // @Input() control: AbstractControl;
    // let listOfAllValidationRules = this.control.getValidators().push(validateZipFn(countryCode)]);
    // this.control.setValidators(listOfAllValidationRules);

    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);
  }
}