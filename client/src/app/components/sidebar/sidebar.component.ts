import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user';
import { ErrorValidators, InputValidators } from 'src/app/methods/input-validators';
import { passwordMatchValidator } from 'src/app/methods/password-Match-Validator';
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
  public user: User;
  // Form Controls
  public form_Controls: object = {
    e_Id: [''],
    e_Name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/)]],
    e_JobNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{3,5}$/)]],
    e_PassWord: ['', [Validators.required, Validators.pattern(/^[\d\W\a-zA-Z]{3,30}$/)]],
    e_ConfirmPassword: ['', [Validators.required]],
    e_Email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    e_Date: this.fb.array([this.fb.control('', Validators.required)]),
    e_Lv: ['', [Validators.required, Validators.maxLength(1)]]
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

  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService,
    private employeeService: EmployeeService, 
    private fb: FormBuilder,
    private modalService: ModalService,
    private alertService: AlertService,
    private ngbRatingConfig: NgbRatingConfig,
    private router: Router,
    private elementRef: ElementRef)
    {
      ngbRatingConfig.max = 3;
      ngbRatingConfig.readonly = true;
    }

  ngOnInit(): void {
    this.user_Profile();
    
  }

  ngAfterViewInit() {
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

    this.modalService.set_FormControls(this.form_Controls);
    this.modalService.set_FormGroup(this.fbGroup);
    this.modalService.set_Form(this.form_);       
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

    let user_Session: User | null = this.loginService.read_User_SessionStorage();

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
  update(): void {
    this.modalService.set_modal({status: 'update', show: true, size: 'md'});
  }


  // choose(item: Employee): void {
  //   this.fbGroup.patchValue({
  //     e_Id: item.e_Id,
  //     e_Name: item.e_Name,
  //     e_JobNumber: item.e_JobNumber,
  //     e_Email: item.e_Email,
  //     e_Lv: item.e_Lv
  //   });

  //   // Set e_Date Value
  //   this.set_FormArray_Val(item.e_Date); 
  //   // Update Modal FormGroup
  //   this.modalService.set_FormGroup(this.fbGroup);
  // }

  // Update FormArray Value
  set_FormArray_Val(item: string = ''): void {  
    const dataArray: Array<string> = item.split(',');
        
    if(dataArray.length == 4)
    {
      const validators: Validators = this.fb_Value['e_Date'].get('0').validator;      
      const isDisabled: boolean = (this.user.lv == 3 && this.fb_Value_Index[0]) ?  false : true;
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
      const month: number = year * 10;
      // const day: string   = (total / (1000 * 3600 * 24)).toString(); // milliseconds * (secs * mins) * hours       
      data[2] = year.toString().split('.')[0];
      data[3] = month.toFixed();      
      return data;
  }

  // Logout
  logout(): void {
    this.loginService.logout();
  }
}
