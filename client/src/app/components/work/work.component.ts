import { AfterViewInit, Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkHours } from 'src/app/interfaces/work-hours';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';
import { WorkHoursService } from 'src/app/services/work-hours.service';
import { ClientService } from 'src/app/services/client.service';
import { Observable, of, Subscription } from 'rxjs';
import { SplitePipe } from 'src/app/pipes/splite.pipe';
import { DecimalPipe } from '@angular/common';
import { Modal } from 'src/app/interfaces/modal';
import { Employee } from 'src/app/interfaces/employee';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  providers: [ SplitePipe, DecimalPipe ]
})
export class WorkComponent implements OnInit, AfterViewInit {
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
  public result_Data: WorkHours[];
  public result_List: WorkHours[];
  // Client Data List
  public client_List$: Observable<Client[]>;
  // User
  public user: Employee;
  // FormGroup
  public fbGroup: FormGroup;
  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;

  // Timezone
  // public getTimezoneOffset: number = (new Date()).getTimezoneOffset() * 60000;
  // DateTime
  // public dateTime: any = (new Date(Date.now() - this.getTimezoneOffset)).toISOString().slice(0, -8);
  // public dateTime_Min: string = (new Date(new Date().setDate(new Date().getDate() - 5))).toISOString().slice(0, -8);
  // public dateTime_Max: string = (new Date(new Date().setDate(new Date().getDate() + 5))).toISOString().slice(0, -8);
  // Pagination
  public page = 1;
  public pageSize = 15;
  // Window Size
  public win_Size: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private loginService: LoginService,
    private workHoursService: WorkHoursService,
    private clientService: ClientService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private alertService: AlertService){}

  ngOnInit(): void {
    this.user = this.loginService.user.value;    
    this.default_FormGroup();
    this.result_Data = [];
    this.result_List = [];
    this.read();
    this.modal_Service();

    // Client Data
    let data: Client[] = [];

    this.clientService.read().subscribe((res:Client[]) => {

      const code: Array<string> = res[0].c_Stand_Code.split(',');
      const stand: Array<string> = res[0].c_Stand.split(',');

      for(const i in code)
      {
        data.push({
          c_Code: '',
          c_Name: '',
          c_WorkOrder: '',
          c_Model: '',
          c_Stand: stand[i],
          c_Stand_Code: code[i]
        });
      }
    });
    this.client_List$ = of(data);
  }

  ngAfterViewInit(): void {
    this.modalService.set_FormGroup(this.fbGroup);
    this.modalService.set_Form(this.form_);
    // Window Resize
    this.win_Size = (document.documentElement.clientWidth > 860) ? false : true;
  }

  // Default FormGroup
  default_FormGroup(): void {
    this.fbGroup = this.fb.group({
      w_Id: [null],
      w_JobNumber: [null, [Validators.required]],
      w_BMinute: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(3)])]),
      w_OMinute: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(3)])]),
      w_WorkOrder: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(20)])]),
      w_Model: new FormArray([new FormControl(null, Validators.maxLength(20))]),
      w_Stand: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(20)])]),
      w_Quantity: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(2)])]),
      w_Remark: new FormArray([new FormControl(null, Validators.maxLength(40))]),
      w_Date: [null, [Validators.required, Validators.maxLength(20)]],
      w_BTotal: [null],
      w_OTotal: [null],
      w_OCheckBox: new FormArray([new FormControl(null)])
    });
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
  get fb_Value(): { [key: string]: AbstractControl } {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string } {
    return Object.values(this.fbGroup.value) || '';
  }

  // FormGroup Reset
  reset_FormGroup(status: string): void {    
    if(status == 'create')
    {
      this.fbGroup.reset(
        {
          w_JobNumber: this.user.e_JobNumber,
          w_BTotal: 0,
          w_OTotal: 0,
          w_Date: new Date().toISOString().slice(0, 10)
        }
      );                
      // Reset FormArray Value
      this.reset_FormArray();
    }
    // Reset ErrorValidators Object
    Reset_Validators(this.fbGroup);    
  }

  // Reset FormArray
  reset_FormArray(): void {      
    Object.keys(this.fbGroup.value).forEach((key, i) => {      
      if(this.fb_Value[key].value instanceof Object)
      {       
        const validators: Validators = this.fb_Value[key].get('0').validator;                 
        
        if(key == 'w_Stand')
        {
          this.fbGroup.setControl(key, this.fb.array([this.fb.control('40 維修',validators)]));
        }
        else if(key == 'w_Quantity' || key == 'w_BMinute' || key == 'w_OMinute')
        {          
          this.fbGroup.setControl(key, this.fb.array([this.fb.control('0',validators)]));
        }
        else
        {                              
          this.fbGroup.setControl(key, this.fb.array([this.fb.control('',validators)]));
        }
      }
    });
  }

  // Update FormArray Value
  update_FormArray(index: number): void {
    const array_Name: Array<string> = ['w_WorkOrder','w_Model', 'w_Stand', 'w_Quantity', 'w_Remark', 'w_BMinute', 'w_OMinute', 'w_OCheckBox'];

    if(index)
    {
      for(const name of array_Name)
      {
        // Delete Value
        (<FormArray>this.fb_Value[name]).removeAt(index);
        // Update FormArray
        this.fbGroup.setControl(name, this.fb_Value[name]);
      }
    }
    else if(this.fb_Value['w_WorkOrder'].value.length < 10)
    {
      for(const name of array_Name)
      {
        const validators: Validators = this.fb_Value[name].get('0').validator;  
        
        if(name == 'w_Stand')
        {
          (<FormArray>this.fb_Value[name]).push(new FormControl('40 維修', validators));
        }
        else if(name == 'w_Quantity' || name == 'w_BMinute' || name == 'w_OMinute')
        {          
          (<FormArray>this.fb_Value[name]).push(new FormControl(0, validators));
        }
        else
        {                    
          (<FormArray>this.fb_Value[name]).push(new FormControl('', validators));
        }
      }
    }
    
    Reset_Validators(this.fbGroup, index);    

    // w_OTotal & w_OTotal Value
    this.set_BOTotal_Value();
  }

  // Set FormArray Value
  set_FormArray(item: WorkHours): void { 
    const array_Name: Array<string> = ['w_WorkOrder','w_Model', 'w_Stand', 'w_Quantity', 'w_Remark', 'w_BMinute', 'w_OMinute', 'w_OCheckBox'];
    
    for(const name of array_Name)
    {      
      const formArray: FormArray = new FormArray([]);
      const validators: Validators = this.fb_Value[name].get('0').validator;      
      
      if(name != 'w_OCheckBox')
      {
        for(const val of item[name].split(','))
        {           
          formArray.push(new FormControl(val, validators));
        }
      }
      else
      {
        for(const i in item['w_OMinute'].split(','))
        {                     
          if(parseInt(item['w_OMinute'].split(',')[i]))
          {
            formArray.push(new FormControl(true));
          }
          else
          {
            formArray.push(new FormControl(false));
          }
        }
      }

      this.fbGroup.setControl(name, formArray);
    }    

    // w_OTotal & w_OTotal Value
    this.set_BOTotal_Value();
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
    const term = searchText.toLowerCase();  
    this.result_List = this.result_Data.filter(res => {
      return res.w_JobNumber.includes(term)
      || res.w_Date.toString().toLowerCase().includes(term)
      || res.e_Name?.toLowerCase().includes(term)
      || (res.w_WorkOrder.indexOf(term) > -1)
      || (res.w_Model.indexOf(term) > -1)
      || (res.w_Stand.indexOf(term) > -1)
      || (res.w_Remark.indexOf(term) > -1);
    });

    this.result_Data = this.result_List;
        
    this.result_List = this.result_List
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
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
      this.alertService.set_Alert('工時異常');
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
      w_Date: item.w_Date.toString().slice(0, 10)
    });

    // FormArray Value
    this.set_FormArray(item);
    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);    
  }

  // w_OTotal & w_OTotal Value
  set_BOTotal_Value(): void {    
    let sum: number = 0;

    sum = this.fb_Value['w_BMinute'].value.reduce((a, b) => Number(a)+Number(b)); 
    this.fb_Value['w_BTotal'].patchValue(sum);  
    
    sum = this.fb_Value['w_OMinute'].value.reduce((a, b) => Number(a)+Number(b)); 
    this.fb_Value['w_OTotal'].patchValue(sum); 
  }

  onChange(key: string, index: any = 0): void {

    index = index.toString();

    let sum: number = 0;

    if(key == 'w_OCheckBox')
    {      
        if(this.fb_Value['w_OCheckBox'].get(index).value)
        {       
          this.fb_Value['w_OMinute'].get(index).patchValue(this.fb_Value['w_BMinute'].get(index).value);
          sum = this.fb_Value['w_OMinute'].value.reduce((a, b) => Number(a)+Number(b));
          this.fb_Value['w_OTotal'].patchValue(sum);  
                    
          this.fb_Value['w_BMinute'].get(index).patchValue('0');
          sum = this.fb_Value['w_BMinute'].value.reduce((a, b) => Number(a)+Number(b));
          this.fb_Value['w_BTotal'].patchValue(sum);  
        }
        else
        {
          this.fb_Value['w_BMinute'].get(index).patchValue(this.fb_Value['w_OMinute'].get(index).value);
          sum = this.fb_Value['w_BMinute'].value.reduce((a, b) => Number(a)+Number(b));
          this.fb_Value['w_BTotal'].patchValue(sum);  
                    
          this.fb_Value['w_OMinute'].get(index).patchValue('0');
          sum = this.fb_Value['w_OMinute'].value.reduce((a, b) => Number(a)+Number(b));
          this.fb_Value['w_OTotal'].patchValue(sum);  
        }        
    }   
    else
    {
      this.set_BOTotal_Value();
    } 
  }

  // DateTime Replace Value
  datetim_Replace(value: string): string {
    const timestamp = value.replace('T', ' ');
    let datetime = timestamp.replace('/','-');
    return value ? `${datetime}`: '';
  }

  // DateTimePick Event
  onDate(event: HTMLInputElement): void {

    const id: string = event.id;
    // day2.getTime()-day1.getTime();
    // now.setHours(0,0,0,0);    
    const value = this.datetim_Replace(event.value);

    if(value.length)
    {
      this.fb_Value[id].patchValue(event.value);
    }
    else
    {
      this.fb_Value[id].patchValue(new Date().toISOString().slice(0, 10));
    }    
  }

  // Check DateTime Value
  get check_Minutes_TotalInt(): boolean {
    const sum: number = Number(this.fb_Value['w_BTotal'].value) + Number(this.fb_Value['w_OTotal'].value);
    return (sum > 0 && sum < 900) ? true : false;
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

  // Window Resize
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.win_Size = (document.documentElement.clientWidth > 860) ? false : true;
  }
}
