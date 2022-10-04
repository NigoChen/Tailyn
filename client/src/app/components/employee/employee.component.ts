import { SlicePipe } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
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

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  // Form
  @ViewChild('form_') form_: TemplateRef<HTMLElement>;
  // Data
  public result_Async$: Observable<Array<Employee>> | Observable<[]>;
  public result_Data: Employee[];
  public result_List: Employee[];
  // User
  public user: User;
  // Form Controls
  public form_Controls: object = {
    e_Id: [''],
    e_Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
    e_JobNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{3,5}$/)]],
    e_PassWord: ['', [Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]],
    e_ConfirmPassword: ['', [Validators.required]],
    e_Email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    e_Date: new FormArray([new FormControl('')]),
    e_Lv: ['1', [Validators.required, Validators.maxLength(1)]],
    e_Recycle: ['0']
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
  // Pagination
  public page = 1;
  public pageSize = 10;

  constructor(
    private loadingService: LoadingService,
    private loginService : LoginService,
    private employeeService: EmployeeService, 
    private fb: FormBuilder,
    private modalService: ModalService,
    private alertService: AlertService,
    private ngbRatingConfig: NgbRatingConfig)
    {
      ngbRatingConfig.max = 3;
      ngbRatingConfig.readonly = true;
      this.modalService.get_modalMDForm().subscribe(res => this.reset_FormGroup(res));
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
  
  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string} {
    return Object.values(this.fbGroup.value) || '';
  }

  // FormGroup Reset
  reset_FormGroup(value: Array<string>): void {  

    // if(value[0] == 'show')
    // {
      if(value[1] == 'create')
      {
        this.fbGroup.reset(
          {
            e_Lv: '1',
            e_Recycle: '0',
          }
        );     
        // Reset FormArray
        this.reset_FormArray_Val();
      }
      else
      {
        this.fbGroup.get('e_PassWord').setValidators(null);
        this.fb_Value['e_PassWord'].updateValueAndValidity();
        this.fb_Value['e_ConfirmPassword'].setValidators(null);
        this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
      }
    // }    
    Reset_Validators(this.fbGroup);
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
            this.modalService.set_modalMDForm(['hide', 'create']);
          }
          else
          {
            this.alertService.set_Alert(22);
          }
        },
        error: (err) => {
          this.alertService.set_Alert(23);
        },
        complete: () => {
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
            this.table_List_Sort();
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
  
  // Search
  // search(searchText: HTMLInputElement): void {
  search(searchText: string): void {
    this.result_List = this.result_Data.filter(res => {      
      const term = searchText.toLowerCase();
      return res.e_JobNumber.toLowerCase().includes(term)
          || res.e_Email?.toLowerCase().includes(term)
          || res.e_Name.toLowerCase().includes(term);
          // || this.decimalPipe.transform(res.w_Time).includes(term);
    });
    // this.result_List = [];

    // for (const [objKey, obj] of Object.entries(this.result_Data))
    // {    
    //   for (const [key, val] of Object.entries(obj))
    //   {
    //     if(key != 'e_Id' && key != 'e_PassWord' && key != 'e_Lv' && key != 'e_Recycle')
    //     {
    //       if (val.includes(searchText))
    //       {
    //         this.result_List.push(this.result_Data[objKey]);
    //         break;
    //       }
    //     }
    //   }
    // } 
  }

  // Pagination
  refreshResult_List() {
    this.result_List = this.result_Data
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  // Table Short
  table_List_Sort(name: string = 'w_Id', isAsc: boolean = false): void {    
    this.result_List.sort((a:any, b:any) => {     
      return (a[name] < b[name] ? -1 : 1) * (isAsc ? 1 : -1);
    });    
  }

  // Update
  update(fg: FormGroup): void {
    this.employeeService.update(fg.value)
    .subscribe(
      {
        next: (res: boolean) => {
          if(res)
          {
            this.read();
            this.modalService.set_modalMDForm(['hide', 'update']);
          }
          else
          {
            this.alertService.set_Alert(32);
          }
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
            this.modalService.set_modalMDForm(['hide', 'delete']);
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

    // Set e_Date Value
    this.set_FormArray_Val(item.e_Date); 
    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);

    // @Input() control: AbstractControl;
    // let listOfAllValidationRules = this.control.getValidators().push(validateZipFn(countryCode)]);
    // this.control.setValidators(listOfAllValidationRules);
  }

  // Update FormArray Value
  set_FormArray_Val(item: string): void {  
    if(item.length > 10)
    {
      item.split(',').forEach((v, i) => {
        this.fb_Value['e_Date'].get(''+i).patchValue(v);
      });
    }
    else
    {
      this.reset_FormArray_Val();
    }
  }

  // Reset FormArray Value
  reset_FormArray_Val(): void {  
    const today: string = new Date().toISOString().slice(0, 10);
    const validators: Validators = this.fb_Value['e_Date'].get('0').validator;      

    this.fbGroup.setControl('e_Date', this.fb.array([
      new FormControl(today, validators),
      new FormControl(today, validators),
      new FormControl('0', validators),
      new FormControl('0', validators)
    ]));
  }

  // DateTimePick Value Chekc
  onValue_Check(id: string, index: number): string {
    let values: string = this.fb_Value[id].value;
    return values.length > 18 ? values.split(',')[index] : '';
  }

  // DateTimePick Value
  onValue(id: string): string {

    let values: any = '';

    if(this.fb_Value_Index[0])
    {      
      if(id == 'Sdate')
      {
        values = this.onValue_Check('Sdate', 0); 
      }
      else
      {
        values = this.onValue_Check('Edate', 1); 
      }
    }
    else
    {
      // Default DateTime
      const today: string = new Date().toISOString().slice(0, 10);
      values = this.datetim_Replace(today);
      this.onDate_Check('e_Date', values, 0);
      this.onDate_Check('e_Date', values, 1);
    }
    
    if(values.length == 19)
    {
      values = values.replace(' ', 'T');
      // substring skip second value
      return values.substring(0, 16);
    }

    return values;
  }

  // DateTime Replace Value
  datetim_Replace(value: string): string {
    const timestamp = value.replace('T', ' ');
    let datetime = timestamp.replace('/','-');
    return value ? datetime : '';
  }

  // Check VALUE
  onDate_Check(name: string, value: string, index: number): void {    
        
    let choose_Value: Array<string> = this.fb_Value[name].value;

    if(value.length)
    {
      // Date Index
      choose_Value[index] = value;
      // Total minutes for array index 2
      choose_Value = this.dateTime_Count(choose_Value);
    }    

    // Update FormGroup Controls Value
    for(let i=0; i<choose_Value.length; i++)
    {      
      this.fb_Value['e_Date'].get(''+i).patchValue(choose_Value[i]);
    }        
  }

  // DateTimePick Event
  onDate(event: HTMLInputElement): void {
    const id: string = event.id;
    const index: number = id == 'Sdate' ? 0 : 1;
    const value: string = this.datetim_Replace(event.value);    
    this.onDate_Check('e_Date', value, index);
  }

  // DataTime Minutes Count
  dateTime_Count(data: Array<string>): Array<string> {           
      const start: any    = new Date(data[0]);
      const end: any      = new Date(data[1]);
      const total: number = Math.abs(end-start);      
      const year: number  = total / (1000 * 3600 * 24 * 365);
      const month: number = year * 10;
      // const day: string   = (total / (1000 * 3600 * 24)).toString(); // milliseconds * (secs * mins) * hours       
      data[2] = year.toString().split('.')[0];
      data[3] = month.toFixed();      
      return data;
  }

  // Destroy
  ngOnDestroy(): void {
    this.modalService.set_FormGroup(null);    
  }

  // mouse click 
  @HostListener('mouseup', ['$event']) onClick($event) {
    this.reset_FormGroup(['hide', 'create']);    
  }
}