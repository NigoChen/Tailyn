import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { Modal } from 'src/app/interfaces/modal';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { passwordMatchValidator } from 'src/app/methods/password-Match-Validator';
import { AlertService } from 'src/app/services/alert.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';
import { RepairService } from 'src/app/services/repair.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  // Form
  @ViewChild('form_') form_: TemplateRef<HTMLElement>;
  // Modal Subscription
  private get_moda_: Subscription;
  private get_Search_: Subscription;
  private get_Create_: Subscription;
  private get_Read_: Subscription;
  private get_Update_: Subscription;
  private get_Delete_: Subscription;
  // Data
  public result_Async$: Observable<Array<Employee>> | Observable<[]>;
  public result_Data: Employee[];
  public result_List: Employee[];
  // User
  public user: Employee;
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
  public fbGroup: FormGroup;
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
              private repairService: RepairService,
              private fb: FormBuilder,
              private modalService: ModalService,
              private alertService: AlertService,
              private ngbRatingConfig: NgbRatingConfig)
              {
                ngbRatingConfig.max = 3;
                ngbRatingConfig.readonly = true;
              }

  ngOnInit(): void {
    this.user = this.loginService.user.value;
    this.default_FormGroup();
    this.result_Data = [];
    this.result_List = [];
    this.read();
    this.modal_Service();
  }

  ngAfterViewInit(): void {
    // this.modalService.get_User_Profile().subscribe((res: Employee) => this.user = res);
    this.modalService.set_FormGroup(this.fbGroup);
    this.modalService.set_Form(this.form_);
  }

  // Default FormGroup
  default_FormGroup(): void {
    this.fbGroup = this.fb.group({
      e_Id: [''],
      e_Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
      e_Email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      e_JobNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{3,5}$/)]],
      e_PassWord: ['', [Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]],
      e_ConfirmPassword: ['', Validators.required],
      e_Lv: ['', [Validators.required, Validators.maxLength(1)]],
      e_Date: this.fb.array([this.fb.control('', Validators.required)])
    },
    {
      updateOn: 'blur',
      validators: [passwordMatchValidator]
    });
    this.reset_FormArray_Val();
  }

  // Modal Service
  modal_Service(): void {    
    this.get_moda_   = this.modalService.get_modal().subscribe((res: Modal) => this.reset_FormGroup(res.status));
    this.get_Search_ = this.modalService.get_Search().subscribe(res => this.search(res));
    this.get_Create_ = this.modalService.get_Create().subscribe(res => this.create(res));
    this.get_Read_   = this.modalService.get_Read().subscribe(res => this.read());
    this.get_Update_ = this.modalService.get_Update().subscribe(res => this.update(res));
    this.get_Delete_ = this.modalService.get_Delete().subscribe(res => this.delete(res));
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
  reset_FormGroup(status: string): void {     
    if(status == 'create')
    {
      this.fbGroup.reset({
          e_Lv: '1',
          e_PassWord: '',
          e_ConfirmPassword: ''
      });
      this.fb_Value['e_PassWord'].setValidators([Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]);
      this.fb_Value['e_PassWord'].updateValueAndValidity();
      this.fb_Value['e_ConfirmPassword'].setValidators([Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]);
      this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
      // Reset FormArray
      this.reset_FormArray_Val();        
    }
    else
    {
      this.fb_Value['e_PassWord'].reset('');
      this.fb_Value['e_PassWord'].setValidators(null);
      this.fb_Value['e_PassWord'].updateValueAndValidity();
      this.fb_Value['e_ConfirmPassword'].reset('');
      this.fb_Value['e_ConfirmPassword'].setValidators(null);
      this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
    }
    Reset_Validators(this.fbGroup);
  }

  // Update User
  update_User(employee: Employee[]): void {    
    employee.find((item: Employee, index: number) => {
      if(this.user.e_JobNumber == item.e_JobNumber)
      {
        this.loginService.create_User_SessionStorage(item);
      }
    });
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
            this.modalService.set_modal({show: false});
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
            this.update_User(res);
            this.result_Data = res;
            this.result_List = res;              
            this.table_List_Sort();
            this.refreshResult_List();
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
    const term = searchText.toLowerCase();
    this.result_List = this.result_Data.filter(res => {      
      return res.e_JobNumber.toLowerCase().includes(term)
      || res.e_Email?.toLowerCase().includes(term)
      || res.e_Name.toLowerCase().includes(term);
          // || this.decimalPipe.transform(res.w_Time).includes(term);
    });

    this.result_Data = this.result_List;
        
    this.result_List = this.result_List
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    // this.result_List = [];

    // for (const [objKey, obj] of Object.entries(this.result_Data))
    // {    
    //   for (const [key, val] of Object.entries(obj))
    //   {
    //     if(key != 'e_Id' && key != 'e_PassWord' && key != 'e_Lv' &&)
    //     {
    //       if (val.includes(searchText))
    //       {
    //         this.result_List.push(this.result_Data[objKey]);
    //         break;
    //       }
    //     }
    //   }
    // } 

    if(this.result_List.length > 5)
    {
      this.refreshResult_List();
    }
  }

  // Pagination
  refreshResult_List() {
    this.result_List = this.result_Data
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    // Go Top
    window.scroll(0, 0);
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
            this.modalService.set_modal({show: false});
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
          // this.reset_Default_Form();
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
            this.modalService.set_modal({show: false});
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
      e_Email: item.e_Email,
      e_JobNumber: item.e_JobNumber
    });
    // Disabled
    const isDisabled: boolean = this.user.e_Lv == 3 ? false : true;
    // e_Lv
    const lv_validators: Validators = this.fb_Value['e_Lv'].validator;      
    this.fbGroup.setControl('e_Lv', this.fb.control({value: item.e_Lv, disabled: isDisabled},lv_validators));
    // e_JobNumber
    const job_validators: Validators = this.fb_Value['e_JobNumber'].validator;      
    this.fbGroup.setControl('e_JobNumber', this.fb.control({value: item.e_JobNumber, disabled: isDisabled},job_validators));
    // Set e_Date Value
    this.set_FormArray_Val(item.e_Date); 
    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);

    // @Input() control: AbstractControl;
    // let listOfAllValidationRules = this.control.getValidators().push(validateZipFn(countryCode)]);
    // this.control.setValidators(listOfAllValidationRules);
  }

  // Update FormArray Value
  set_FormArray_Val(item: string = ''): void {  
    const dataArray: Array<string> = item.split(',');
        
    if(dataArray.length == 4)
    {
      const validators: Validators = this.fb_Value['e_Date'].get('0').validator;      
      const isDisabled: boolean = this.user.e_Lv == 3 ? false : true;
      this.fb_Value['e_Date'].get('0').reset({value: dataArray[0], disabled: isDisabled},validators);
      this.fb_Value['e_Date'].get('1').reset({value: dataArray[1], disabled: isDisabled},validators);
      this.fb_Value['e_Date'].get('2').reset(dataArray[2],validators);
      this.fb_Value['e_Date'].get('3').reset(dataArray[3],validators);
    }
  }

  // Reset FormArray Value
  reset_FormArray_Val(): void {  
    const today: string = new Date().toISOString().slice(0, 10);
    const validators: Validators = this.fb_Value['e_Date'].get('0').validator;    
    this.fbGroup.setControl('e_Date', this.fb.array([
      this.fb.control(today, validators),
      this.fb.control(today, validators),
      this.fb.control('0', validators),
      this.fb.control('0', validators)
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
    choose_Value[index] = '';
    choose_Value[2] = '0';
    choose_Value[3] = '0';

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
      const month: number = year * 12;
      // const day: string   = (total / (1000 * 3600 * 24)).toString(); // milliseconds * (secs * mins) * hours       
      data[2] = year.toString().split('.')[0];
      data[3] = month.toFixed();      
      return data;
  }

  // Destroy
  ngOnDestroy(): void {
    this.get_moda_.unsubscribe();
    this.get_Search_.unsubscribe();
    this.get_Create_.unsubscribe();
    this.get_Read_.unsubscribe();
    this.get_Update_.unsubscribe();
    this.get_Delete_.unsubscribe();
  }

  // mouse click 
  @HostListener('mouseup', ['$event']) onClick($event) {
    // if(this.fb_Value_Index[0])
    // {
      // this.reset_FormGroup(['hide', 'create']);    
    // }
  }
}