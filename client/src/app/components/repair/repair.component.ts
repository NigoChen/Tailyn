import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { Client } from 'src/app/interfaces/client';
import { Employee } from 'src/app/interfaces/employee';
import { Modal } from 'src/app/interfaces/modal';
import { Repair } from 'src/app/interfaces/repair';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { SplitePipe } from 'src/app/pipes/splite.pipe';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';
import { FilterSortService } from 'src/app/services/filter-sort.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';
import { RepairService } from 'src/app/services/repair.service';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss'],
  providers: [ SplitePipe, DecimalPipe ]
})
export class RepairComponent implements OnInit {
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
  public result_Data: Repair[];
  public result_List: Repair[];
  public result_List_Filter$: Observable<Repair[]>;
  // Client Data List
  public client_List$: Observable<any> | Observable<[]>;
  // User
  public user: Employee;
  // FormGroup
  public fbGroup: FormGroup;
  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;
  // Pagination
  public page = 1;
  public pageSize = 15;
  // Window Size
  public win_Size: boolean = false;
  
  constructor(
              private loadingService: LoadingService,
              private loginService: LoginService,
              private repairService: RepairService,
              private fb: FormBuilder,
              private modalService: ModalService,
              private alertService: AlertService,
              private clientService: ClientService,
              private filterSortService: FilterSortService){}

  ngOnInit(): void {
    this.user = this.loginService.user.value;    
    this.default_FormGroup();
    this.result_Data = [];
    this.result_List = [];
    this.read();
    this.modal_Service();  
  }

  ngAfterViewInit(): void {
    this.modalService.set_FormGroup(this.fbGroup);
    this.modalService.set_Form(this.form_);    
    // this.filterSortService.get_data_().subscribe(res => this.result_List = res);
    // Window Resize
    this.win_Size = (document.documentElement.clientWidth > 860) ? false : true;
  }

  // Default FormGroup
  default_FormGroup(): void {
    this.fbGroup = this.fb.group({
      r_Id: [null],
      r_JobNumber: [null, Validators.required],
      r_SerialNumber: [null, [Validators.required, Validators.maxLength(30)]],
      r_WorkOrder: [null, [Validators.required, Validators.maxLength(30)]],
      r_Model: [null, [Validators.required, Validators.maxLength(30)]],
      r_Error: new FormArray([
        new FormControl(null, [Validators.required, Validators.maxLength(30)]),
        new FormControl(null, [Validators.required, Validators.maxLength(30)])
      ]),
      r_Process: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(50)])]),
      r_Status: [null, [Validators.required, Validators.maxLength(10)]],
      r_Client: [null, [Validators.required, Validators.maxLength(30)]],
      r_Date: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(20)])]),
      r_Dates: new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(20)])]),
      r_Minutes: new FormArray([new FormControl(0, [Validators.required, Validators.maxLength(3)])]),
      r_MTotal: [null, Validators.max(700)]
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
          r_JobNumber: this.user.e_JobNumber,
          r_Status: '待修',
          r_MTotal: 0
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

        if(key == 'r_Dates')
        {
          const date: string = new Date().toISOString().slice(0, 10);
          this.fbGroup.setControl(key, this.fb.array([this.fb.control(date, validators)]));
          this.fbGroup.setControl('r_Date', this.fb.array([this.fb.control(`${date}=0`, validators)]));
        }
        else if(key == 'r_Process')
        {
          this.fbGroup.setControl(key, this.fb.array([this.fb.control(null, validators)]));
        }
        else if(key == 'r_Minutes')
        {
          this.fbGroup.setControl(key, this.fb.array([this.fb.control(0, validators)]));
        }
        else if(key == 'r_Error')
        {
          this.fbGroup.setControl(key, 
            this.fb.array([
              this.fb.control(null, validators),
              this.fb.control(null, validators)
            ])
          );
        }
      }
    });    
  }

  // Update FormArray Value
  update_FormArray(index: number): void {
    const array_Name: Array<string> = ['r_Date','r_Dates', 'r_Minutes', 'r_Process'];

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
    else if(this.fb_Value['r_Minutes'].value.length < 10)
    {
      for(const name of array_Name)
      {
        const validators: Validators = this.fb_Value[name].get('0').validator;  
        
        if(name == 'r_Dates')
        {
          const date: string = new Date().toISOString().slice(0, 10);
          (<FormArray>this.fb_Value[name]).push(new FormControl(date, validators));
        }
        else if(name == 'r_Minutes')
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
  }

  // Set FormArray Value
  set_FormArray(item: Repair): void { 
    // const total:number = this.fb_Value['r_Date'].value.map(v => {
    //   const str_Num: string = v.toString().replace(/(.*)=/,"");
    //   return Number(str_Num);
    // }).reduce((a: number, b: number) =>{
    //   return a+b;
    // });
    // const total_Minutes: number = item.r_Date.split(',').map((v: string) => {
    //   const arrays: Array<string> = v.split('=');

    //   this.fb_Value['r_MTotal'].patchValue(arrays[0]);

    //   const num: number = Number(arrays[1]);

    //   this.fb_Value['r_Dates'].patchValue(num);

    //   return num;
    // }).reduce((a: number, b: number) =>{
    //   return a+b;
    // });
    const array_Name: Array<string> = ['r_Dates','r_Minutes', 'r_Date', 'r_Process', 'r_Error'];

    for(const name of array_Name)
    {      
      const formArray: FormArray = new FormArray([]);
      const validators: Validators = this.fb_Value[name].get('0').validator;   

      if(name == 'r_Dates')
      {
        for(const val of item.r_Date.split(','))
        {
          const dates: string = val.split('=')[0];
          formArray.push(new FormControl(dates, validators)); 
        }
      }
      else if(name == 'r_Minutes')
      {
        let total_Minutes: number = 0;

        for(const val of item.r_Date.split(','))
        {
          const minutes: number = Number(val.split('=')[1]);
          total_Minutes += minutes;
          formArray.push(new FormControl(minutes, validators)); 
        }
        // r_MTotal Value
        this.fb_Value['r_MTotal'].patchValue(total_Minutes);
      }
      else if(name == 'r_Date')
      {
        for(const val of item.r_Date.split(','))
        {
          formArray.push(new FormControl(val, validators)); 
        }
      }
      else
      {
        for(const val of item[name].split(','))
        {
          formArray.push(new FormControl(val, validators));
        }
      }
      // Update Controls
      this.fbGroup.setControl(name, formArray);
    }
  }

  // User Profile
  // user_Profile(): void {
  //   let user_Session: Employee | null = this.loginService.read_User_SessionStorage();

  //   if (user_Session)
  //   {      
  //       this.user = user_Session;
  //   }
  // }

  // Create
  create(fg: FormGroup): void {       
    this.repairService.create(fg.value)
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

  // Read
  read(): void {
    this.repairService.read()
      .subscribe(
        {
          next: (res: Repair[]) => {
            if (res.length)
            {                                         
              this.result_Data = res;
              this.result_List = res;
              this.table_List_Sort();
              this.refreshResult_List(); 

              // Client List Data
              // const code: Array<string> = res[0]['CODE'].split(',');
              // const name: Array<string> = res[0]['NAME'].split(',');
              // const val: any = [];

              // for(const i in name)
              // {
              //     val.push({c_Code: code[i], c_Name: name[i]});         
              // }

              // this.client_List$ = of(val);   



              if(!this.clientService.client_Option.getValue())
              {      
                this.clientService.read().subscribe(res => {                
          
                  console.log(res);
                  
                  this.clientService.set_client({c_Code: "ssssssss", c_Name: "zzzzzzzzz"});
                });
              }
              
          
              this.clientService.get_client().subscribe(s => console.log(s));
   
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
      return res.r_JobNumber.toLowerCase().includes(term)
          || res.r_SerialNumber.toLowerCase().includes(term)
          || res.r_WorkOrder.toLowerCase().includes(term)
          || res.r_Model.toLowerCase().includes(term)
          || res.r_Status.toLowerCase().includes(term)
          || (res.r_Error.indexOf(term) > -1)
          || res.r_Client.includes(term)
          || (res.r_Date.indexOf(term) > -1)
    });      

    this.result_Data = this.result_List;
        
    this.result_List = this.result_List
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  // Sort Data
  sort(types: any): void {
    
    let result: any;

    if (typeof types === "string")
    {
      // return [...this.result_List[]].sort().join('');

    }
    else if(types == "number")
    {

    }
    else if(Array.isArray(types))
    {

    }

    // this.result_List = this.result_Data.filter((res: any) => {      
    //   return res[name].toLowerCase().includes(term)
    //       || res.r_SerialNumber.includes(term)
    //       || res.r_WorkOrder.toLowerCase().includes(term)
    //       || res.r_Model.toLowerCase().includes(term)
    //       || res.r_Status.includes(term)
    //       || (res.r_Error.indexOf(term) > -1)
    //       || res.r_Client.toLowerCase().includes(term)
    //       || (res.r_Date.indexOf(term) > -1)
    // });
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
    this.repairService.create(fg.value)
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

  // Delete
  delete(id: number): void {
    this.repairService.delete(id)
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
  choose(item: Repair): void {     
    this.fbGroup.patchValue({
      r_Id: item.r_Id,
      r_JobNumber: item.r_JobNumber,
      r_SerialNumber: item.r_SerialNumber,
      r_WorkOrder: item.r_WorkOrder,
      r_Model: item.r_Model,
      r_Status: item.r_Status,
      r_Client: item.r_Client
    });
    // FormArray Value
    this.set_FormArray(item);
    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);        
  }

  // DateTimePick Value Chekc
  onValue_Check(id: string, index: number): string {
    let values: string = this.fb_Value[id].value;
    return values.length > 15 ? values.split(',')[index] : '';
  }

  // DateTime Replace Value
  datetim_Replace(value: string): string {
    const timestamp = value.replace('T', ' ');
    let datetime = timestamp.replace('/','-');
    return value ? `${datetime}`: '';
  }

  // Date Event
  date_Change(event: HTMLInputElement): void {
    const controls: string = event.id;  
    const value = this.datetim_Replace(event.value);
    // Update r_Dates Value
    this.fb_Value['r_Dates'].get(controls).patchValue(value);
    // Get r_Minutes Value
    const minutes: string = this.fb_Value['r_Minutes'].get(controls).value.toString();
    // string value
    const result: string = `${value}=${minutes}`;
    // Update r_Date Value
    this.fb_Value['r_Date'].get(controls).patchValue(result);
  }

  // Minutes Total
  minute_Change(index: number): void {       
    const controls: string = index.toString();
    const dates = this.fb_Value['r_Dates'].get(controls).value;
    const minutes = this.fb_Value['r_Minutes'].get(controls).value;
    // Get Minutes Total
    const total_Minutes = this.fb_Value['r_Minutes'].value.reduce((a:any, b:any) => a + b, 0);

    if(!this.fb_Value['r_MTotal'].hasError('max'))
    {
      // string value
      const result: string = `${dates}=${minutes}`;
      // Update r_Date Value
      this.fb_Value['r_Date'].get(controls).patchValue(result);
    }
    else
    {
      this.fb_Value['r_Minutes'].get(controls).patchValue(0);
    }

    // Update r_MTotal Value
    this.fb_Value['r_MTotal'].patchValue(total_Minutes);
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
