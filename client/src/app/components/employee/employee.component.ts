import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { User } from 'src/app/interfaces/user';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent;
  

  // Employee Interface
  result_Data = [] as Employee[];
  result_Async$: Observable<Array<Employee>> | Observable<[]>;
  result_List = [] as Employee[];

  // User
  user: User = {
    jNumber:'',
    name:'',
    lv:1
  }

  // FormGroup
  fbGroup: FormGroup = this.fb.group({
    e_Id: [null],
    e_Name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
    e_JobNumber: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,5}$/)]],
    e_PassWord: [null, [Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]],
    e_Email: [null, [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    e_Lv: [null, [Validators.required, Validators.maxLength(1)]]
  });

  constructor(
    private employeeService: EmployeeService, 
    private loginService: LoginService,
    private fb: FormBuilder) {

    }

  ngOnInit(): void {
    this.read_Data();
  }

  // User Profile
  user_Profile(employee:Employee[]): void {

    let localData: User | null = this.loginService.read_User_LocalStorage();
  
    if(localData != null)
    {
      const userData = employee.find((item:Employee, index:number) => item.e_JobNumber === localData!.jNumber);      

      if(userData != undefined)
      {  
        this.user = {
          jNumber:userData.e_JobNumber,
          name:userData.e_Name,
          lv:userData.e_Lv
        }
      }
      else
      {
        this.user = localData;
      }
    }
    else
    {
      // this.stateView.next({loading: true, error: true});
    }
  }

  // Create
  create_Data(): void {
    
    this.employeeService.create(this.fbGroup.value)
    .subscribe(
      {
        next: (res:boolean) => {

          if(res)
          {
            this.read_Data();

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
  read_Data(): void {
    // this.employeeAsync$ = this.employeeService.read();
    this.employeeService.read()
    .subscribe(
      {
        next: (res: Employee[]) => { 
          if(res.length > 0)
          {

            console.log(res);
            
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
          // this.stateView.next({loading: false, error: false});
        }
      }
    );
  }

  // Refresh
  refresh(): void {

  }

  // Search
  search(): void {

  }

  // Insert
  insert(): void {
    this.modal.open();
    this.modal.modal_Content
  }

  // Update
  update(): void {
    
  }

  // Delete
  delete(): void {

  }

}
