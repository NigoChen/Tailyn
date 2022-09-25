import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkHours } from 'src/app/interfaces/work-hours';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalService } from 'src/app/services/modal.service';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { User } from 'src/app/interfaces/user';
import { Employee } from 'src/app/interfaces/employee';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';
import { WorkHoursService } from 'src/app/services/work-hours.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { timeStamp } from 'console';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  // Form
  @ViewChild('form_') form_: TemplateRef<HTMLElement>;
  // Data
  public result_Data: WorkHours[];
  public result_List: WorkHours[];
  // User
  public user: User;
  // Form Controls
  public form_Controls: object = {
    w_Id: [''],
    w_JobNumber: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,5}$/)]],
    w_BMinute: ['0', [Validators.required, Validators.maxLength(30)]],
    w_OMinute: ['0', [Validators.maxLength(30)]],
    w_WorkOrder: ['', [Validators.required, Validators.maxLength(30)]],
    w_Model: ['', [Validators.required, Validators.maxLength(30)]],
    w_Stand: ['', [Validators.required, Validators.maxLength(30)]],
    w_Remark: ['', [Validators.maxLength(50)]],
    w_Time: ['', [Validators.required, Validators.maxLength(30)]]
  }

  public fbGroup: FormGroup = this.fb.group(this.form_Controls);
  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;

  public dates: string = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

  // Timezone
  public getTimezoneOffset: number = (new Date()).getTimezoneOffset() * 60000;
  // Date Time
  public start_bMinute: string = (new Date(Date.now() - this.getTimezoneOffset)).toISOString().slice(0, -8);
  public end_bMinute: string = this.start_bMinute;
  public dateTime: string = this.start_bMinute;
  private SoMinute: string = '';
  private EoMinute: string = '';
  private SbMinute: string = '';
  private EbMinute: string = '';

  constructor(
    private loadingService: LoadingService,
    private loginService: LoginService,
    private workHoursService: WorkHoursService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private alertService: AlertService,
    private calendar: NgbCalendar) {
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
  get fb_Value(): { [key: string]: AbstractControl } {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string } {
    return Object.values(this.fbGroup.value) || '';
  }

  // FormGroup Reset
  reset_FormGroup(value: Array<string>): void {

    if(value[0] == 'show')
    {
      if (value[1] == 'create')
      {
        this.fbGroup.reset(
          {
            w_BMinute: '0',
            w_OMinute: '0',
            w_Time: this.dateTime
          }
        );
      }
      else
      {
        this.start_bMinute = '';
        this.end_bMinute = '';
        this.SoMinute = '';
        this.EoMinute = '';
        this.SbMinute = '';
        this.EbMinute = '';
      }
      // else
      // {
      //   this.fbGroup.get('e_PassWord').setValidators(null);
      //   this.fb_Value['e_PassWord'].updateValueAndValidity();
      //   this.fb_Value['e_ConfirmPassword'].setValidators(null);
      //   this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
      // }
    }

    Reset_Validators(this.fbGroup);
  }

  // User Profile
  user_Profile(employee: Employee[]): void {

    this.user = { jNumber: '', name: '', lv: 1 };

    let user_Session: User | null = this.loginService.read_User_SessionStorage();

    if (user_Session != null) {
      const userData = employee.find((item: Employee, index: number) => item.e_JobNumber === user_Session!.jNumber);

      if (userData != undefined) {
        this.loginService.create_User_SessionStorage(userData);

        this.user = {
          jNumber: userData.e_JobNumber,
          name: userData.e_Name,
          lv: userData.e_Lv
        }
      }
      else {
        this.loginService.logout();
      }
    }
  }

  // Create
  create(fg: FormGroup): void {
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

  // Read
  read(): void {
    this.workHoursService.read()
      .subscribe(
        {
          next: (res: WorkHours[]) => {
            if (res.length) {
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

    // this.workHoursService.update(fg.value)
    // .subscribe(
    //   {
    //     next: (res: boolean) => {
    //       if(res)
    //       {
    //         this.read();
    //         this.modalService.set_modalMDForm(['hide', 'update']);
    //       }
    //       else
    //       {
    //         this.alertService.set_Alert(32);
    //       }

    //       // this.stateView.next({loading: false, error: false});
    //     },
    //     error: (err) => {
    //       this.alertService.set_Alert(33);
    //     },
    //     complete: () => {
    //       // this.stateView.next({loading: false, error: false});
    //     }
    //   }
    // )
  }

  // Delete
  delete(id: number): void {
    this.workHoursService.delete(id)
      .subscribe(
        {
          next: (res: boolean) => {
            if (res) {
              this.read();
              this.modalService.set_modalMDForm(['hide', 'delete']);
            }
            else {
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
    this.fbGroup.patchValue(item);

    console.log(item);
    
    // Update Modal FormGroup
    this.modalService.set_FormGroup(this.fbGroup);
  }

  onDate(event: HTMLInputElement): void {

    const value: string = event.value;
    let datetime = value.replace('T', ' ');
    const id: string = event.id;
    datetime = datetime.replace('-','/');
    // const now = new Date();

    // day2.getTime()-day1.getTime();
    // now.setHours(0,0,0,0);

    console.log(datetime);
    

    if(value)
    {
      switch (id)
      {
        case 'SbMinute':
          this.SbMinute = datetime;
          break;
        case 'EbMinute':
          this.EbMinute = datetime;
          break;
        case 'SoMinute':
          this.SoMinute = datetime;
          break;
        case 'EoMinute':
          this.EoMinute = datetime;
          break;
        case 'dateTime':
          this.fb_Value['w_Time'].patchValue(datetime);
          break;
      }

      if(this.SbMinute.length > 2 && this.EbMinute.length > 2)
      {
        const oMinute: string = this.minutes_Total(this.SbMinute, this.EbMinute);
        this.fb_Value['w_BMinute'].patchValue(oMinute);
      }

      if(this.SoMinute.length > 2 && this.EoMinute.length > 2)
      {
        const oMinute: string = this.minutes_Total(this.SoMinute, this.EoMinute);
        this.fb_Value['w_OMinute'].patchValue(oMinute);
      }
    }
  }

  // Minutes Total
  minutes_Total(startDate: string, endDate: string): string {
    const start: any = new Date(startDate);
    const end: any = new Date(endDate);
    const total = Math.abs(end-start);
    const days = total/(1000 * 3600 * 24);
    const hours = Math.floor(days*24);
    const minutes = Math.floor(hours*60);

    return (start.getTime() > end.getTime()) ? `-${minutes.toString()}` : minutes.toString();
  }

  // Destroy
  ngOnDestroy(): void {
    this.modalService.set_FormGroup(null);
  }
}
