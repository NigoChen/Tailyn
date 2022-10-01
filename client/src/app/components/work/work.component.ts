import { Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkHours } from 'src/app/interfaces/work-hours';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';
import { WorkHoursService } from 'src/app/services/work-hours.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { StandService } from 'src/app/services/stand.service';
import { Observable } from 'rxjs';
import { Stand } from 'src/app/interfaces/stand';
import { SplitePipe } from 'src/app/pipes/splite.pipe';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  providers: [ SplitePipe ]
})
export class WorkComponent implements OnInit {
  // Form
  @ViewChild('form_') form_: TemplateRef<HTMLElement>;
  // Data
  public result_Data: WorkHours[];
  public result_List: WorkHours[];
  // User
  public user: User;
  // FormGroup Object
  public form_Controls: object = {
    w_Id: [''],
    w_JobNumber: ['', [Validators.required]],
    w_BMinute: ['', [Validators.maxLength(50)]],
    w_OMinute: ['', [Validators.maxLength(50)]],
    w_WorkOrder: new FormArray([new FormControl('', [Validators.required, Validators.maxLength(20)])]),
    w_Model: new FormArray([new FormControl('', [Validators.required, Validators.maxLength(20)])]),
    w_Stand: new FormArray([new FormControl('', [Validators.required, Validators.maxLength(10)])]),
    w_Quantity: new FormArray([new FormControl(1, [Validators.required, Validators.maxLength(4)])]),
    w_Remark: new FormArray([new FormControl('', [Validators.required, Validators.maxLength(50)])]),
    w_Time: ['', [Validators.required, Validators.maxLength(20)]],
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
  public dateTime: string = (new Date(Date.now() - this.getTimezoneOffset)).toISOString().slice(0, -8);
  // Minutes Total Title
  public minutesTotalTitle: Map<string, string> = new Map<string, string>([['w_BTotal','0'], ['w_OTotal','0']]);
    
  constructor(
    private loadingService: LoadingService,
    private loginService: LoginService,
    private workHoursService: WorkHoursService,
    private standService: StandService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private alertService: AlertService,
    private calendar: NgbCalendar,
    private elementRef: ElementRef)
    {
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
    this.user_Profile();
    this.standList$ = this.standService.read();    
  }

  ngAfterViewInit(): void {
    this.modalService.set_FormControls(this.form_Controls);
    this.modalService.set_FormGroup(this.fbGroup);
    this.modalService.set_Form(this.form_);
    // this.modalService.set_User_Profile(this.user_Profile);
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
      (<FormArray>this.fb_Value['w_Model']).push(new FormControl('', [Validators.required, Validators.maxLength(20)]));
      (<FormArray>this.fb_Value['w_Stand']).push(new FormControl('', [Validators.required, Validators.maxLength(10)]));
      (<FormArray>this.fb_Value['w_Quantity']).push(new FormControl('', [Validators.required, Validators.maxLength(4)]));
      (<FormArray>this.fb_Value['w_Remark']).push(new FormControl('', [Validators.required, Validators.maxLength(50)]));
    }
    Reset_Validators(this.fbGroup, index);
  }

  // FormGroup Reset
  reset_FormGroup(value: Array<string>): void {    
    // if(value[0] == 'show')
    // {
      if(value[1] == 'create')
      {
        this.fbGroup.reset(
          {
            w_Id: '',
            w_JobNumber: this.user.jNumber,
            w_BMinute: ',,,',
            w_OMinute: ',,,',
            w_BTotal: '0',
            w_OTotal: '0',
            w_BDeduct: 70,
            w_ODeduct: 0,
            w_Time: new Date().toISOString().slice(0, 10)
          }
        );

        // Reset FormArray Value
        this.reset_FormArray_Val();
      }

      // Reset ErrorValidators Object
      Reset_Validators(this.fbGroup);
    // }    
  }

  // User Profile
  user_Profile(): void {

    this.user = { jNumber: '', name: '', lv: 1 };

    let user_Session: User | null = this.loginService.read_User_SessionStorage();

    if (user_Session)
    {      
        this.user = user_Session;
    }
    else
    {
      this.loginService.logout();
    }
  }

  // Create
  create(fg: FormGroup): void {
    
    if(this.fb_Value['w_BMinute'].value.length > 40 || this.fb_Value['w_OMinute'].value.length > 40)
    {
      this.workHoursService.create(fg.value)
        .subscribe(
          {
            next: (res: boolean) => {
              if (res) {
                this.read();
              }
              else {
                this.alertService.set_Alert(22);
              }
            },
            error: (err) => {
              this.alertService.set_Alert(23);
            },
            complete: () => {
              this.modalService.set_modalMDForm(['hide', 'create']);
            }
          }
        );
    }
    else
    {
      this.alertService.set_Alert('工時不可為0');
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
  refresh(): void { }

  // Search
  search(searchText: string): void {

    this.result_List = [];

    for (let i = 0; i < this.result_Data.length; i++) {
      if (this.result_Data[i]['w_JobNumber'].includes(searchText) || this.result_Data[i]['w_WorkOrder'].includes(searchText)) {
        this.result_List.push(this.result_Data[i]);
      }
    }
  }

  // Update
  update(fg: FormGroup): void {
    if(this.fb_Value['w_BMinute'].value.length > 40 || this.fb_Value['w_OMinute'].value.length > 40)
    {
      this.workHoursService.create(fg.value)
        .subscribe(
          {
            next: (res: boolean) => {
              if (res) {
                this.read();
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
              this.modalService.set_modalMDForm(['hide', 'update']);
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
              this.modalService.set_modalMDForm(['hide', 'delete']);
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
      w_Time: new Date(item.w_Time).toISOString().slice(0, 10),
      w_BTotal: item.w_BTotal,
      w_OTotal: item.w_OTotal,
      w_BDeduct: item.w_BDeduct,
      w_ODeduct: item.w_ODeduct
    });

    this.minutesTotalTitle.set('w_BTotal', item.w_BMinute);
    this.minutesTotalTitle.set('w_OTotal', item.w_OTotal);
    
    // FormArray Value
    this.set_FormArray_Val(item);

    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);
  }

  // Update FormArray Value
  set_FormArray_Val(item: any): void {  

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

    const array_Name: Array<string> = ['w_WorkOrder','w_Model','w_Stand','w_Quantity','w_Remark'];

    for(const name of array_Name)
    {      
      const formArray: FormArray = new FormArray([]);

      const validators: Validators = this.fb_Value[name].get('0').validator;

      formArray.push(new FormControl('', validators));

      this.fbGroup.setControl(name, formArray);
    }
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
    return value ? `${datetime}:00`: '';
  }

  // Check VALUE
  onDate_Check(name: string, value: string, index: number): void {    
    
    let choose_Value: Array<string> = this.fb_Value[name].value.split(','); 
    choose_Value[index] = '';
    choose_Value[2] = '0';

    if(value.length)
    {
      // index  ~ 1
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
      case 'w_Time':

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

    if(dateTime_Total.toString().length > 42)
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
    
    // if(this.fb_Value[name].value.length < 4)
    // {
    //   return;
    // }
  
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

  // Destroy
  ngOnDestroy(): void {
    this.modalService.set_FormGroup(null);
  }

  // mouse click 
  @HostListener('mouseup', ['$event']) onClick($event) {

    this.modalService.set_modalMDForm(['hide', 'create']);

    // console.info('Click event fired', $event);
    // if($event.which === 2)
    // {

    //   console.info('Middle mouse button clicked');
    // }
  }
}
