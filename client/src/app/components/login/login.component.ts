import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Input Password type
  public password_Type: string = 'password';

  // counter
  public iscounter?: Subscription | null;
  
  // progressbar View
  public progressbar_View: boolean = false;

  // progressbar Type
  public progressbar_Type: string = 'secondary';

  // progressbar Value
  public progressbar_Value: number = 25;

  // FormGroup
  public fbGroup: FormGroup = this.fb.group({
    jNumber: [null, [Validators.required]],
    passWord: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    newPassWord: [null],
    email: [null],
    code: [null]
  });

  // FormGroup Error
  public forms: {
    email: boolean;
    code: boolean;
  } = {
    email: false,
    code: false
  };

  public status: {
    account: boolean;
    email: boolean;
    code: boolean;
    system: boolean;
    ip: string;
    counter: number
  } = {
    account: true,
    email: true,
    code: true,
    system: true,
    ip: '',
    counter: 0
  };

  // Constructor
  constructor(
    private loadingService: LoadingService,
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router){
}

  // NgOnInit
  ngOnInit(): void {
    this.counter();
  }

  // NgAfterContentInit
  ngAfterContentInit(): void {            
    // this.router.events.subscribe(event => {

    //   console.log(event);
      
    //   if(event instanceof NavigationEnd) {
    //      alert('navigation succeeded');
    //   }
    // });

  }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // Reset Forms
  reset_Forms(): void {
    this.forms = {
      email: false,
      code: false
    }
  }

  // Reset Status
  reset_Status(): void {
    this.status = {
      account: true,
      email: true,
      code: true,
      system: true,
      ip: '',
      counter: this.loginService.read_Time_SessionStorage() ? this.loginService.read_Time_SessionStorage() : 0
    };
  }

  //  Toggle PassWord Type
  toggle_password_Type(): void
  {
    this.password_Type = this.password_Type == 'password' ? 'text' : 'password';
  }

  // Toggle View
  toggle_Form(): void {

    this.forms.email =! this.forms.email;

    this.reset_Status();

    if(this.forms.email)
    {
      this.fb_Value['email'].setValidators([Validators.required]);
      this.fb_Value['email'].updateValueAndValidity();
    }
    else
    {
      this.fb_Value['passWord'].setValidators([Validators.required]);
      this.fb_Value['passWord'].updateValueAndValidity();

      this.fb_Value['newPassWord'].clearValidators();
      this.fb_Value['newPassWord'].updateValueAndValidity();

      this.fb_Value['code'].clearValidators();
      this.fb_Value['code'].updateValueAndValidity();
    }

    this.fbGroup.reset();
  }

  // User Ip
  /*
  * 1. get ip
  *
  * 2. send ip to email
  */
  get_IP(): void {
    this.loginService.user_Ip().subscribe(
      {
        next: (userIP: string) => {          
          this.status.ip = userIP.length && userIP;
        },
        error: (err) => {
          this.status.system = false;
          this.progressbar_Show(false);
        },
        complete: () => {          
          if(this.status.ip.length)
          {
            this.get_Email(
              {
                jNumber: this.fb_Value['jNumber'].value,
                email: this.fb_Value['email'].value,
                ip: this.status.ip
              }
            );
          }
        }
      }
    );
  }

  // counter
  counter(): void {

    this.status.counter = this.loginService.read_Time_SessionStorage();     

    if(this.status.counter)
    {
      // 60 minutes
      this.iscounter = timer(0, 60000).subscribe(() => {

        if (this.status.counter)
        {
          --this.status.counter;
        }
        else
        {
          this.iscounter = null;
        }
      });
    }
    else
    {
      this.status.counter = 0;
    }
  }
  
  // User Email
  get_Email(userData: object): void {

    this.loginService.send_Email(userData).subscribe(
      {
        next: (res: boolean) => { 
          this.status.email = res;
        },
        error: (err) => {
          this.status.system = false;
          this.progressbar_Show(false);
        },
        complete: () => {  

          if(this.status.email)
          {            
            this.fb_Value['newPassWord'].setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
            this.fb_Value['newPassWord'].updateValueAndValidity();
            this.fb_Value['code'].setValidators([Validators.required]);
            this.fb_Value['code'].updateValueAndValidity();

            this.forms.code = true;
            this.progressbar_Show(true, true);
          }
        }
      }
    );
  }

  // Login
  login(): void {
    
    this.loginService.login(this.fbGroup.value).subscribe(
      {
        next: (res: boolean) => {                     
          this.status.account = res;
        },
        error: (err) => {
          this.status.system = false;
          this.progressbar_Show(false);
        },
        complete: () => {  
          
          if(this.status.account)
          {            
            this.progressbar_Show(true, true);
            this.loadingService.set_App_Loading(true);
            window.location.reload();
          }

          this.fbGroup.reset();
        }
      }
    );
  }

  create_Time_Delay(): void {
    this.loginService.create_Time_SessionStorage();
  }

  // New PassWord
  new_PassWord(): void {    
    
    this.loginService.update(this.fbGroup.value).subscribe(
      {
        next: (res: boolean) => {                     
          this.status.code = res;
        },
        error: (err) => {
          this.status.system = false;
          this.progressbar_Show(this.status.system);
        },
        complete: () => {  
        
          if(this.status.code)
          {            
            this.progressbar_Show(true, true);
            this.counter();
            this.reset_Forms();
            this.fbGroup.reset();
            this.create_Time_Delay();
          }
        }
      }
    );
  }
  
  // Progressbar Show
  progressbar_Show(status: boolean, complete?: boolean): void {

    this.progressbar_View = true;

    this.progressbar_Type = status ? 'success':'danger';

    this.progressbar_Value = 25;

    setTimeout(() => {
      this.progressbar_Value = 50;
    }, 600);

    if(complete)
    {
      setTimeout(() => {
        this.progressbar_Value = 100;
      }, 1200);
    }

    setTimeout(() => {
      this.progressbar_View = false;
      this.progressbar_Value = 0;
    }, 2800);
  }

  // Form Submit
  onSubmit(): void {

    this.reset_Status();

    this.progressbar_Show(true);
        
    if(this.forms.email && this.fb_Value['newPassWord'].value == null)
    {
      this.get_IP();
    }
    else if (this.fb_Value['newPassWord'].value != null)
    {
      this.new_PassWord();
    }
    else
    {      
      this.login();
    }
  }
}