// import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { WorkHours } from 'src/app/interfaces/work-hours';
// import { LoadingService } from 'src/app/services/loading.service';
// import { ModalService } from 'src/app/services/modal.service';
// import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
// import { User } from 'src/app/interfaces/user';
// import { Employee } from 'src/app/interfaces/employee';
// import { LoginService } from 'src/app/services/login.service';
// import { EmployeeService } from 'src/app/services/employee.service';
// import { AlertService } from 'src/app/services/alert.service';
// import { WorkHoursService } from 'src/app/services/work-hours.service';
// import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { DatePipe } from '@angular/common';

// @Component({
//   selector: 'app-work',
//   templateUrl: './work.component.html',
//   styleUrls: ['./work.component.scss']
// })
// export class WorkComponent implements OnInit {
//   // Form
//   @ViewChild('form_') form_: TemplateRef<HTMLElement>;
//   // Data
//   public result_Data: WorkHours[];
//   public result_List: WorkHours[];
//   // User
//   public user: User;
//   // Form Controls
//   public form_Controls: object = {
//     w_Id: [''],
//     w_JobNumber: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,5}$/)]],
//     w_BMinute: ['0', [Validators.required, Validators.maxLength(30)]],
//     w_OMinute: ['0', [Validators.maxLength(30)]],
//     w_WorkOrder: ['', [Validators.required, Validators.maxLength(30)]],
//     w_Model: ['', [Validators.required, Validators.maxLength(30)]],
//     w_Stand: ['', [Validators.required, Validators.maxLength(30)]],
//     w_Remark: ['', [Validators.maxLength(50)]],
//     w_Time: ['', [Validators.required, Validators.maxLength(30)]]
//   }

//   public fbGroup: FormGroup = this.fb.group(this.form_Controls);
//   // Input Validators blur
//   public inputValidators: Function = InputValidators;
//   // Input Validators Error
//   public errorValidators: object = ErrorValidators;

//   public dates: string = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

//   // Timezone
//   public getTimezoneOffset: number = (new Date()).getTimezoneOffset() * 60000;
//   // Date Time
//   public start_bMinute: string = (new Date(Date.now() - this.getTimezoneOffset)).toISOString().slice(0, -5);
//   public end_bMinute: string = this.start_bMinute;
//   public dateTime: string = this.start_bMinute;

//   private SoMinute: string = '';
//   private EoMinute: string = '';

//   // public dateTime: string = new Date().toLocaleString('zh-TW', {
//   //   timeZone: 'Asia/Taipei', 

//   //    dateStyle: 'short',
//   //    timeStyle: 'medium'
//   // });

//   // year: 'numeric',
//   // month: '2-digit',
//   // day: '2-digit',
//   // hour: '2-digit',
//   // hour12: true,
//   // minute: '2-digit',
//   // second: '2-digit',
//   // public dateTime: string = new DatePipe('en-US').transform(new Date().toISOString(), '');

//   constructor(
//     private loadingService: LoadingService,
//     private loginService: LoginService,
//     private workHoursService: WorkHoursService,
//     private fb: FormBuilder,
//     private modalService: ModalService,
//     private alertService: AlertService,
//     private calendar: NgbCalendar) {
//     this.modalService.get_modalMDForm().subscribe(res => this.reset_FormGroup(res));
//     this.modalService.get_Search().subscribe(res => this.search(res));
//     this.modalService.get_Create().subscribe(res => this.create(res));
//     this.modalService.get_Read().subscribe(res => this.read());
//     this.modalService.get_Update().subscribe(res => this.update(res));
//     this.modalService.get_Delete().subscribe(res => this.delete(res));
//   }

//   ngOnInit(): void {
//     Reset_Validators(this.fbGroup);
//     this.result_Data = [];
//     this.result_List = [];
//     this.read();
//   }

//   ngAfterViewInit(): void {
//     this.modalService.set_FormControls(this.form_Controls);
//     this.modalService.set_FormGroup(this.fbGroup);
//     this.modalService.set_Form(this.form_);
//     this.modalService.set_User_Profile(this.user_Profile);
//   }

//   // FormGroup Controls Value
//   get fb_Value(): { [key: string]: AbstractControl } {
//     return this.fbGroup.controls;
//   }

//   // FormGroup Controls Value By Index
//   get fb_Value_Index(): { [key: number]: string } {
//     return Object.values(this.fbGroup.value) || '';
//   }

//   // FormGroup Reset
//   reset_FormGroup(value: Array<string>): void {

//     if (value[0] == 'show') {
//       if (value[1] == 'create') {
//         const date = new Date();
//         // let month:any = (now.getMonth() + 1);               
//         // let day:any = now.getDate();
//         // if (month < 10) 
//         //     month = "0" + month;
//         // if (day < 10) 
//         //     day = "0" + day;

//         // const datetimes =  [
//         //               date.getFullYear(),
//         //               padTo2Digits(date.getMonth() + 1),
//         //               padTo2Digits(date.getDate()),
//         //             ].join('-') +
//         //             ' ' +
//         //             [
//         //               padTo2Digits(date.getHours()),
//         //               padTo2Digits(date.getMinutes()),
//         //               // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
//         //             ].join(':')

//         // let today = now.getFullYear() + '-' + month + '-' + day + ' '+now.getHours +':'+now.getMinutes+':00';
//         // const isoString = date.toISOString()
//         // element.value = isoString.substring(0, isoString.indexOf("T") + 6);


//         this.fbGroup.reset(
//           {
//             w_BMinute: '0',
//             w_OMinute: '0',
//             w_Time: this.dateTime
//           }
//         );

//         // w_Time: new Date().toISOString().slice(0, -1)
//       }
//       // else
//       // {
//       //   this.fbGroup.get('e_PassWord').setValidators(null);
//       //   this.fb_Value['e_PassWord'].updateValueAndValidity();
//       //   this.fb_Value['e_ConfirmPassword'].setValidators(null);
//       //   this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
//       // }
//     }

//     Reset_Validators(this.fbGroup);
//   }

//   // User Profile
//   user_Profile(employee: Employee[]): void {

//     this.user = { jNumber: '', name: '', lv: 1 };

//     let user_Session: User | null = this.loginService.read_User_SessionStorage();

//     if (user_Session != null) {
//       const userData = employee.find((item: Employee, index: number) => item.e_JobNumber === user_Session!.jNumber);

//       if (userData != undefined) {
//         this.loginService.create_User_SessionStorage(userData);

//         this.user = {
//           jNumber: userData.e_JobNumber,
//           name: userData.e_Name,
//           lv: userData.e_Lv
//         }
//       }
//       else {
//         this.loginService.logout();
//       }
//     }
//   }

//   // Create
//   create(fg: FormGroup): void {
//     this.workHoursService.create(fg.value)
//       .subscribe(
//         {
//           next: (res: boolean) => {
//             if (res) {
//               this.read();
//             }
//             else {
//               this.alertService.set_Alert(22);
//             }
//           },
//           error: (err) => {
//             this.alertService.set_Alert(23);
//           },
//           complete: () => {
//             this.modalService.set_modalMDForm(['hide', 'create']);
//           }
//         }
//       );
//   }

//   // Read
//   read(): void {
//     this.workHoursService.read()
//       .subscribe(
//         {
//           next: (res: WorkHours[]) => {
//             if (res.length) {
//               this.result_Data = res;
//               this.result_List = res;
//             }
//           },
//           error: (err) => {
//             this.alertService.set_Alert(13);
//           },
//           complete: () => {
//             this.loadingService.set_Dashboard_Loading(false);
//           }
//         }
//       );
//   }

//   // Refresh
//   refresh(): void { }

//   // Search
//   search(searchText: string): void {

//     this.result_List = [];

//     for (let i = 0; i < this.result_Data.length; i++) {
//       if (this.result_Data[i]['w_JobNumber'].includes(searchText) || this.result_Data[i]['w_WorkOrder'].includes(searchText)) {
//         this.result_List.push(this.result_Data[i]);
//       }
//     }
//   }

//   // Update
//   update(fg: FormGroup): void {
//     this.workHoursService.create(fg.value)
//       .subscribe(
//         {
//           next: (res: boolean) => {
//             if (res) {
//               this.read();
//             }
//             else {
//               this.alertService.set_Alert(22);
//             }
//           },
//           error: (err) => {
//             this.alertService.set_Alert(23);
//           },
//           complete: () => {
//             this.modalService.set_modalMDForm(['hide', 'create']);
//           }
//         }
//       );

//     // this.workHoursService.update(fg.value)
//     // .subscribe(
//     //   {
//     //     next: (res: boolean) => {
//     //       if(res)
//     //       {
//     //         this.read();
//     //         this.modalService.set_modalMDForm(['hide', 'update']);
//     //       }
//     //       else
//     //       {
//     //         this.alertService.set_Alert(32);
//     //       }

//     //       // this.stateView.next({loading: false, error: false});
//     //     },
//     //     error: (err) => {
//     //       this.alertService.set_Alert(33);
//     //     },
//     //     complete: () => {
//     //       // this.stateView.next({loading: false, error: false});
//     //     }
//     //   }
//     // )
//   }

//   // Delete
//   delete(id: number): void {
//     this.workHoursService.delete(id)
//       .subscribe(
//         {
//           next: (res: boolean) => {
//             if (res) {
//               this.read();
//               this.modalService.set_modalMDForm(['hide', 'delete']);
//             }
//             else {
//               this.alertService.set_Alert(42);
//             }
//           },
//           error: (err) => {
//             this.alertService.set_Alert(43);
//           }
//         }
//       );
//   }

//   // choose
//   choose(item: Employee): void {
//     this.fbGroup.patchValue(item);
//     // Update Modal FormGroup
//     this.modalService.set_FormGroup(this.fbGroup);


//     // {
//     //   year: parseInt(birthDate.format('YYYY'), 10),
//     //   month: parseInt(birthDate.format('M'), 10),
//     //   day: parseInt(birthDate.format('D'), 10)
//     // }
//   }

//   onDate(event: HTMLInputElement): void {

//     const value: string = event.value;
//     let datetime = value.replace('T', ' ');
//     const id: string = event.id;
//     const now = new Date();

//     datetime = datetime.replace('-','/');

//     // day2.getTime()-day1.getTime();
//     // now.setHours(0,0,0,0);

//     if(value)
//     {
//       switch (id)
//       {
//         case 'SbMinute':
//           this.SoMinute = datetime;
//           break;
//         case 'EbMinute':
//           this.EoMinute = datetime;
//           break;
//         case 'SoMinute':
//           break;
//         case 'EoMinute':
//           break;
//       }

//       if(this.SoMinute.length > 2 && this.EoMinute.length > 2)
//       {
//         const oMinute: string = this.minutes_Total(this.SoMinute, this.EoMinute);
//         this.fb_Value['w_OMinute'].patchValue(oMinute);
//       }
      
//       if(this.SoMinute.length > 2 && this.EoMinute.length > 2)
//       {
//         const oMinute: string = this.minutes_Total(this.SoMinute, this.EoMinute);
//         this.fb_Value['w_OMinute'].patchValue(oMinute);
//       }


//       // console.log(value.replace('T', ' '));

//     }
//   }


//   minutes_Total(startDate: string, endDate: string): string {
//     const start:any = new Date(startDate);
//     const end:any = new Date(endDate);
//     const total = Math.abs(start-end);
//     const days = total/(1000 * 3600 * 24);
//     const hours = Math.floor(days*24);
//     const minutes = Math.floor(hours*60);
//     return minutes.toString();
//   }


//   // iso(date: Date): string {

//   //     const tzOffset = -date.getTimezoneOffset();
//   //     const diff = tzOffset >= 0 ? '+' : '-';
//   //     const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
//   //     const total = date.getFullYear() +
//   //       '-' + pad(date.getMonth() + 1) +
//   //       '-' + pad(date.getDate()) +
//   //       'T' + pad(date.getHours()) +
//   //       ':' + pad(date.getMinutes()) +
//   //       ':' + pad(date.getSeconds()) +
//   //       diff + pad(tzOffset / 60) +
//   //       ':' + pad(tzOffset % 60);

//   //       console.log(total);


//   //   return new Date(total).toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
//   // }

//   // Destroy
//   ngOnDestroy(): void {
//     this.modalService.set_FormGroup(null);
//   }
// }
