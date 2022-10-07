import { AfterViewInit, Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkHours } from 'src/app/interfaces/work-hours';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';
import { WorkHoursService } from 'src/app/services/work-hours.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { StandService } from 'src/app/services/stand.service';
import { Observable } from 'rxjs';
import { Stand } from 'src/app/interfaces/stand';
import { SplitePipe } from 'src/app/pipes/splite.pipe';
import { DecimalPipe } from '@angular/common';
import { Modal } from 'src/app/interfaces/modal';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  providers: [ SplitePipe, DecimalPipe ]
})
export class WorkComponent implements OnInit, AfterViewInit {
  // Form
  @ViewChild('form_') form_: TemplateRef<HTMLElement>;
  // Data
  public result_Data: WorkHours[];
  public result_List: WorkHours[];
  // User
  public user: Employee;
  // FormGroup Object
  public form_Controls: object = {
    w_Id: [''],
    w_JobNumber: ['', [Validators.required]],
    w_BMinute: ['', [Validators.maxLength(50)]],
    w_OMinute: ['', [Validators.maxLength(50)]],
    w_WorkOrder: new FormArray([new FormControl('', [Validators.required, Validators.maxLength(20)])]),
    w_Model: new FormArray([new FormControl('', Validators.maxLength(20))]),
    w_Stand: new FormArray([new FormControl('', [Validators.required, Validators.maxLength(10)])]),
    w_Quantity: new FormArray([new FormControl(1, [Validators.required, Validators.maxLength(4)])]),
    w_Remark: new FormArray([new FormControl('', Validators.maxLength(40))]),
    w_Date: ['', [Validators.required, Validators.maxLength(20)]],
    w_BTotal: ['0', [Validators.required]],
    w_OTotal: ['0', [Validators.required]],
    w_BDeduct: [70, [Validators.required]],
    w_ODeduct: [0, [Validators.required]]
  }
  // FormGroup
  public fbGroup: FormGroup = this.fb.group(this.form_Controls);
  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;
  // Stand Data List
  public standList$: Observable<Array<Stand>> | Observable<[]>;
  // Timezone
  public getTimezoneOffset: number = (new Date()).getTimezoneOffset() * 60000;
  // DateTime
  public dateTime: any = (new Date(Date.now() - this.getTimezoneOffset)).toISOString().slice(0, -8);
  public dateTime_Min: string = (new Date(new Date().setDate(new Date().getDate() - 5))).toISOString().slice(0, -8);
  public dateTime_Max: string = (new Date(new Date().setDate(new Date().getDate() + 5))).toISOString().slice(0, -8);
  // Pagination
  public page = 1;
  public pageSize = 15;

  constructor(
    private loadingService: LoadingService,
    private loginService: LoginService,
    private workHoursService: WorkHoursService,
    private standService: StandService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private alertService: AlertService,
    private calendar: NgbCalendar,
    private elementRef: ElementRef,
    private decimalPipe: DecimalPipe)
    {}

  ngOnInit(): void {
    Reset_Validators(this.fbGroup);
    this.result_Data = [];
    this.result_List = [];
    this.read();
    this.user_Profile();
    this.standList$ = this.standService.read();     
    this.modal_Service();  
  }

  ngAfterViewInit(): void {
    this.modalService.set_FormControls(this.form_Controls);
    this.modalService.set_FormGroup(this.fbGroup);
    this.modalService.set_Form(this.form_);
  }

  // Modal Service
  modal_Service(): void {
    this.modalService.get_modal().subscribe((res: Modal) => this.reset_FormGroup(res.status));
    this.modalService.get_Search().subscribe(res => this.search(res));
    this.modalService.get_Create().subscribe(res => this.create(res));
    this.modalService.get_Read().subscribe(res => this.read());
    this.modalService.get_Update().subscribe(res => this.update(res));
    this.modalService.get_Delete().subscribe(res => this.delete(res));
  }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl } {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string } {
    return Object.values(this.fbGroup.value) || '';
  }

  // Add / Remove FormArray
  reset_FormArray(index: number): void {
    if(index)
    {
      (<FormArray>this.fb_Value['w_WorkOrder']).removeAt(index);
      (<FormArray>this.fb_Value['w_Model']).removeAt(index);
      (<FormArray>this.fb_Value['w_Stand']).removeAt(index);
      (<FormArray>this.fb_Value['w_Quantity']).removeAt(index);
      (<FormArray>this.fb_Value['w_Remark']).removeAt(index);
    }
    else if(this.fb_Value['w_WorkOrder'].value.length < 5)
    {
      (<FormArray>this.fb_Value['w_WorkOrder']).push(new FormControl('', [Validators.required, Validators.maxLength(20)]));
      (<FormArray>this.fb_Value['w_Model']).push(new FormControl('', Validators.maxLength(20)));
      (<FormArray>this.fb_Value['w_Stand']).push(new FormControl('40', [Validators.required, Validators.maxLength(10)]));
      (<FormArray>this.fb_Value['w_Quantity']).push(new FormControl(1, [Validators.required, Validators.maxLength(4)]));
      (<FormArray>this.fb_Value['w_Remark']).push(new FormControl('ZZZ', Validators.maxLength(50)));
    }
    Reset_Validators(this.fbGroup, index);    
  }

  // FormGroup Reset
  reset_FormGroup(status: string): void {    
    if(status == 'create')
    {
      this.fbGroup.reset(
        {
          w_JobNumber: this.user.e_JobNumber,
          w_BMinute: ',,,',
          w_OMinute: ',,,',
          w_BTotal: '0',
          w_OTotal: '0',
          w_BDeduct: 70,
          w_ODeduct: 0,
          w_Date: new Date().toISOString().slice(0, 10)
        }
      );                
      // Reset FormArray Value
      this.reset_FormArray_Val();
    }
    // Reset ErrorValidators Object
    Reset_Validators(this.fbGroup);
  }

  // User Profile
  user_Profile(): void {

    let user_Session: Employee | null = this.loginService.read_User_SessionStorage();

    if (user_Session)
    {      
        this.user = user_Session;
    }
  }

  // Create
  create(fg: FormGroup): void {
    if(this.check_Minutes_TotalInt)
    {
      this.workHoursService.create(fg.value)
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
    else
    {
      this.alertService.set_Alert('工時異常');
    }
  }

  // Read
  read(): void {
    this.workHoursService.read()
      .subscribe(
        {
          next: (res: WorkHours[]) => {
            if (res.length)
            {                                         
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
  search(searchText: string): void {
    this.result_List = this.result_Data.filter(res => {      
      const term = searchText.toLowerCase();
      return res.w_JobNumber.toLowerCase().includes(term)
          || res.w_Date.toString().toLowerCase().includes(term)
          || res.e_Name?.toLowerCase().includes(term)
          || res.s_Code?.toLowerCase().includes(term)
          || res.s_Title?.toLowerCase().includes(term)
          || (res.w_WorkOrder.indexOf(term) > -1)
          || (res.w_Model.indexOf(term) > -1)
          || (res.w_Stand.indexOf(term) > -1)
          || (res.w_Remark.indexOf(term) > -1);
          // || this.decimalPipe.transform(res.w_Date).includes(term);
    });
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
    if(this.check_Minutes_TotalInt)
    {
      this.workHoursService.create(fg.value)
        .subscribe(
          {
            next: (res: boolean) => {
              if (res)
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
            }
          }
        );
    }
    else
    {
      this.alertService.set_Alert('工時不可為 0');
    }
  }

  // Delete
  delete(id: number): void {
    this.workHoursService.delete(id)
      .subscribe(
        {
          next: (res: boolean) => {
            if (res)
            {
              this.read();
              this.modalService.set_modal({show: false});
            }
            else
            {
              this.alertService.set_Alert(42);
            }
          },
          error: (err) => {
            this.alertService.set_Alert(43);
          }
        }
      );
  }

  // choose
  choose(item: WorkHours): void {     
    this.fbGroup.patchValue({
      w_Id: item.w_Id,
      w_JobNumber: item.w_JobNumber,
      w_BMinute: item.w_BMinute,
      w_OMinute: item.w_OMinute,
      w_Date: new Date(item.w_Date).toISOString().slice(0, 10),
      w_BTotal: item.w_BTotal,
      w_OTotal: item.w_OTotal,
      w_BDeduct: item.w_BDeduct,
      w_ODeduct: item.w_ODeduct
    });

    // FormArray Value
    this.set_FormArray_Val(item);
    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);    
  }

  // Update FormArray Value
  set_FormArray_Val(item: WorkHours): void { 
    const array_Name: Array<string> = ['w_WorkOrder','w_Model','w_Stand','w_Quantity','w_Remark'];

    for(const name of array_Name)
    {      
      const formArray: FormArray = new FormArray([]);
      const validators: Validators = this.fb_Value[name].get('0').validator;      

      for(const val of item[name].split(','))
      {      
        formArray.push(new FormControl(val, validators));
      }

      this.fbGroup.setControl(name, formArray);
    }
  }

  // Reset FormArray Value
  reset_FormArray_Val(): void {  
    Object.keys(this.fbGroup.value).forEach((key, i) => {

      if(this.fb_Value[key].value instanceof Object)
      {
        const validators: Validators = this.fb_Value[key].get('0').validator;

        if(key == 'w_Stand')
        {
          this.fbGroup.setControl(key, this.fb.array([this.fb.control('40',validators)]));
        }
        else if(key == 'w_Quantity')
        {
          this.fbGroup.setControl(key, this.fb.array([this.fb.control(1,validators)]));
        }
        else if(key == 'w_WorkOrder')
        {
          this.fbGroup.setControl(key, this.fb.array([this.fb.control('',validators)]));
        }
        else
        {
          this.fbGroup.setControl(key, this.fb.array([this.fb.control('')]));
        }
      }
    });
  }

  // DateTimePick Value Chekc
  onValue_Check(id: string, index: number): string {
    let values: string = this.fb_Value[id].value;
    return values.length > 15 ? values.split(',')[index] : '';
  }

  // DateTimePick Value
  onValue(id: string): string {

    let values: any = '';

    switch (id)
    {
      case 'SbMinute':    
        values = this.onValue_Check('w_BMinute', 0);        
        break;
      case 'EbMinute':
        values = this.onValue_Check('w_BMinute', 1);
        break;
      case 'SoMinute':
        values = this.onValue_Check('w_OMinute', 0);
        break;
      case 'EoMinute':
        values = this.onValue_Check('w_OMinute', 1);
        break;
    }

    // Create Form Default Value
    if(!this.fb_Value_Index[0] && !values.length)
    {
      if(id == 'SbMinute' || id == 'SoMinute')
      {
        const today: string = this.dateTime.slice(0, 11)+'08:00';
        values = this.datetim_Replace(today);        
        this.onDate_Check('w_BMinute', values, 0);
        this.onDate_Check('w_OMinute', values, 0);
      }
    }

    values = values.replace(' ', 'T');
    return values;
  }

  // DateTime Replace Value
  datetim_Replace(value: string): string {
    const timestamp = value.replace('T', ' ');
    let datetime = timestamp.replace('/','-');
    return value ? `${datetime}`: '';
  }

  // Check VALUE
  onDate_Check(name: string, value: string, index: number): void {    
    
    let choose_Value: Array<string> = this.fb_Value[name].value.split(','); 

    choose_Value[index] = '';
    choose_Value[2] = '0';
    
    if(value.length)
    {            
      // Date Index
      choose_Value[index] = value;
      // Total minutes for array index 2
      choose_Value[2] = this.dateTime_Count(choose_Value, name);
    }

    // Update Deduct Total
    let deduct: string = 'w_BDeduct';

    // Update Minutes Total
    let minutes: string = 'w_BTotal';
    
    if(name == 'w_OMinute')
    {
      deduct = 'w_ODeduct';
      minutes = 'w_OTotal';
    }
    
    this.fb_Value[minutes].patchValue(choose_Value[2]);
    choose_Value[3] = this.fb_Value[deduct].value;
    // Update FormGroup Controls Value
    this.fb_Value[name].patchValue(choose_Value.toString());    
  }

  // DateTimePick Event
  onDate(event: HTMLInputElement): void {

    const id: string = event.id;
    // day2.getTime()-day1.getTime();
    // now.setHours(0,0,0,0);    
    const value = this.datetim_Replace(event.value);
    
    switch (id)
    {
      case 'SbMinute':
        this.onDate_Check('w_BMinute', value, 0);
        break;
      case 'EbMinute':
        this.onDate_Check('w_BMinute', value, 1);
        break;
      case 'SoMinute':        
        this.onDate_Check('w_OMinute', value, 0);        
        break;
      case 'EoMinute':
        this.onDate_Check('w_OMinute', value, 1);
        break;
      case 'w_Date':
        if(value.length)
        {
          this.fb_Value[id].patchValue(event.value);
        }
        else
        {
          this.fb_Value[id].patchValue(new Date().toISOString().slice(0, 10));
        }
        break;
    }      
  }

  // DataTime Minutes Count
  dateTime_Count(dateTime_Total: Array<string>, name: string): string {

    let result: string = '0';
  
    if(dateTime_Total.toString().length > 36)
    {            
      const start: any = new Date(dateTime_Total[0]);
      const end: any = new Date(dateTime_Total[1]);
      const total: number = Math.abs(end-start);
      const days: number = total / (1000 * 3600 * 24);
      const hours: number = days * 24;
      let minutes: number = Math.floor(hours * 60);      
      
      minutes = (name == 'w_BMinute') ? (minutes - this.fb_Value['w_BDeduct'].value) : (minutes - this.fb_Value['w_ODeduct'].value);
      result =  (start.getTime() > end.getTime()) ? `-${minutes}` : `${minutes}`;
    }
    return result;
  }
  
  // Minutes Total
  deduct_Change(name: string): void {       
    // Update Deduct Total
    let deduct: string = 'w_BDeduct';
    
    // Update Minutes Total
    let minutes: string = 'w_BTotal';
    
    if(name == 'w_OMinute')
    {
      deduct = 'w_ODeduct';
      minutes = 'w_OTotal';
    }

    let dateTime_Total = this.fb_Value[name].value.split(',');

    // Update Minutes Total
    dateTime_Total[2] = this.dateTime_Count(dateTime_Total, name);   
    this.fb_Value[minutes].patchValue(dateTime_Total[2]);

    // Update Deduct Total
    dateTime_Total[3] = this.fb_Value[deduct].value;

    // Update DateTime Total Value
    this.fb_Value[name].patchValue(dateTime_Total.toString());
  }

  // Check DateTime Value
  get check_Minutes_TotalInt(): boolean {
    const bMinutes: number = this.fb_Value['w_BMinute'].value.length;
    const oMinutes: number = this.fb_Value['w_OMinute'].value.length;
    const bTotalInt: number = parseInt(this.fb_Value['w_BTotal'].value);
    const oTotalInt: number = parseInt(this.fb_Value['w_OTotal'].value);
    return (bMinutes > 40 && bTotalInt > -1) || (oMinutes > 40 && oTotalInt > -1) ? true : false;
  }

  // Destroy
  ngOnDestroy(): void {
    this.modalService.set_FormGroup(null);
  }

  // mouse click 
  @HostListener('mouseup', ['$event']) onClick($event) {
    // this.reset_FormGroup('close');

    // this.modalService.set_modalMDForm(['hide', 'create']);

    // console.info('Click event fired', $event);
    // if($event.which === 2)
    // {

    //   console.info('Middle mouse button clicked');
    // }
  }
}
