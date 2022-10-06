import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Alert } from 'selenium-webdriver';
import { Alerts } from 'src/app/interfaces/alerts';
import { Employee } from 'src/app/interfaces/employee';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { AlertService } from 'src/app/services/alert.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // Form
  @ViewChild('form_') form_: TemplateRef<HTMLElement>;
  // User
  public user: Employee;
  // Form Controls
  public form_Controls: object = {
    e_Id: [''],
    e_Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
    e_JobNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{3,5}$/)]],
    e_PassWord: [''],
    e_Email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    e_Date: this.fb.array([this.fb.control('', Validators.required)]),
    e_Lv: ['', [Validators.required, Validators.maxLength(1)]]
  }
  // FormGroup
  public fbGroup: FormGroup = this.fb.group(this.form_Controls);
  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;
  // Aert
  public alerts: Alerts;
  // Modal 
  @ViewChild('modalForm') public modalForm: ElementRef<HTMLInputElement>;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private alertService: AlertService,
    private ngbRatingConfig: NgbRatingConfig,
    private router: Router,
    private elementRef: ElementRef,
    private ngbModal: NgbModal)
    {
      ngbRatingConfig.max = 3;
      ngbRatingConfig.readonly = true;
    }

  ngOnInit(): void {
    this.user_Profile();
    Reset_Validators(this.fbGroup);
    this.alertService.get_Alert().subscribe(res => {this.alerts = res});
  }

  ngAfterViewInit() {
    this.menu_Link_Style();
  }

  // Menu Link Style
  menu_Link_Style(): void {
    let navLink = this.elementRef.nativeElement.querySelectorAll('.nav-link')[0];
    
    // Page Reload Check Url
    // if(this.router.url.includes('/Tailyn'))
    if(this.router.url == '/Tailyn')
    {
      navLink.classList.add('text-danger', 'font-weight-bold');
    }
    else
    {
      navLink.classList.remove('text-danger', 'font-weight-bold');
    }

    // When routerLinkActive
    this.router.events.subscribe((event: Event) => {
      
      if(event instanceof NavigationStart)
      {
        if(event.url == '/Tailyn' || event.url == '/')
        {
          navLink.classList.add('text-danger', 'font-weight-bold');            
        }
        else
        {
          navLink.classList.remove('text-danger', 'font-weight-bold');
        }
      }

      if (event instanceof NavigationEnd)
      {

      }
    });    
    // Only page reload
    // this.activatedRoute.data.subscribe(data => {
    //     console.log(data);
        
    // });

    // Only page reload
    // this.activatedRoute.firstChild.data.subscribe(data => {
    //     console.log(data);
        
    // });
  }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string} {
    return Object.values(this.fbGroup.value) || '';
  }
  // User Profile
  user_Profile(): void {
    let user_Session: Employee | null = this.loginService.read_User_SessionStorage();
    
    if (user_Session != null)
    {
        this.user = user_Session;
    }
    else
    {
      this.logout();
    }
  }
  
  // Update
  show_Modal(): void { 
    this.set_FormGroup_Val();
    this.ngbModal.open(this.modalForm, {backdropClass: 'light-blue-backdrop', size: 'sm', windowClass:'modal-holder'});
  }

  update(): void {    
    this.employeeService.update(this.fbGroup.value)
    .subscribe(
      {
        next: (res: boolean) => {
          if(res)
          {            
            const dateString: string = this.fb_Value['e_Date'].value.toString();
            this.fbGroup.setControl('e_Date',this.fb.control(dateString));            
            this.loginService.create_User_SessionStorage(this.fbGroup.value);
            this.close();
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
          this.alertService.clear_Alert();
          this.user = this.loginService.read_User_SessionStorage();          
        }
      }
    )
  }

  close(): void {
    this.ngbModal.dismissAll();
    this.alertService.clear_Alert();
  }

  // FormGroup Reset
  reset_FormGroup(status: string): void {     
    if(status == 'update')
    {
      this.fb_Value['e_PassWord'].setValidators(null);
      this.fb_Value['e_PassWord'].updateValueAndValidity();
      this.fb_Value['e_ConfirmPassword'].setValidators(null);
      this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
    }
    Reset_Validators(this.fbGroup);
  }

  // Update FormArray Value
  set_FormGroup_Val(): void { 
    // User SessionStorage         
    const user:Employee = this.loginService.read_User_SessionStorage();
    // Reset FormGroup
    this.fbGroup.patchValue({
      e_Id: user.e_Id,
      e_Name: user.e_Name,
      e_Email: user.e_Email,
      e_PassWord: user.e_PassWord
    });
    // Disabled
    const isDisabled: boolean = this.user.e_Lv == 3 ? false : true;
    // e_Lv
    const lv_validators: Validators = this.fb_Value['e_Lv'].validator;      
    this.fbGroup.setControl('e_Lv', this.fb.control({value: user.e_Lv, disabled: isDisabled},lv_validators));
    // e_JobNumber
    const job_validators: Validators = this.fb_Value['e_JobNumber'].validator;      
    this.fbGroup.setControl('e_JobNumber', this.fb.control({value: user.e_JobNumber, disabled: isDisabled},job_validators));
    // Date Value
    const dataArray: Array<string> = user.e_Date.split(',');
        
    if(dataArray.length == 4)
    {
      const date_validators: Validators = this.fb_Value['e_Date'].get('0').validator;      

      this.fbGroup.setControl('e_Date', this.fb.array([
        this.fb.control({value: dataArray[0], disabled: isDisabled},date_validators),
        this.fb.control({value: dataArray[1], disabled: isDisabled},date_validators),
        this.fb.control({value: dataArray[2], disabled: isDisabled},date_validators),
        this.fb.control({value: dataArray[3], disabled: isDisabled},date_validators),
      ]));   
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
      const month: number = year * 10;
      data[2] = year.toString().split('.')[0];
      data[3] = month.toFixed();      
      return data;
  }

  // Logout
  logout(): void {
    this.loginService.logout();
  }
}
