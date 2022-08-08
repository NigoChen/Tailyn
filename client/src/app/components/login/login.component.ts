import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ViewChildren('error_Text')
  // public error_Text!: QueryList<ElementRef<HTMLLIElement>>

  // @ViewChild('alert_Error', { static: true }) public alert_Error: ElementRef<HTMLLIElement>;
  public password_Type: string = 'password';

  // Email Status
  public isEmail: boolean = false;
  
  // Code Status
  public isCode: boolean = false;
  
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
  public fbError: {
    account: boolean,
    email: boolean,
    system: boolean,
    ip: string
  } = {
    account: true,
    email: true,
    system: true,
    ip: ''
  };

  // Constructor
  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  // Init
  ngOnInit(): void {}

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // Reset fbError
  reset_fbError(): void {

    setTimeout(() => {
      this.fbError = {
        account: true,
        email: true,
        system: true,
        ip: ''
      };
    }, 3000);
  }

  //  Toggle PassWord Type
  toggle_password_Type(): void
  {
    this.password_Type = this.password_Type == 'password' ? 'text' : 'password';
  }

  // Switch Email Form
  email(): void {

    this.isEmail =! this.isEmail;

    this.toggle_password_Type();

    console.log(this.isEmail);
    

    if(this.isEmail)
    {
      // this.fb_Value['passWord'].patchValue(null);
      // this.fb_Value['passWord'].clearValidators();
      // this.fb_Value['passWord'].updateValueAndValidity();
      
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
  }

  // User Ip
  get_IP(): void {
    this.loginService.user_Ip().subscribe(
      {
        next: (userIP: string) => {          

          // check ip localstorage
          if(userIP.length)
          {
            this.fbError.ip = userIP;
          }
        },
        error: (err) => {

        },
        complete: () => {          
         
          if(this.fbError.ip.length > 0)
          {
            const userData: object = {
              jNumber: this.fb_Value['jNumber'].value,
              email: this.fb_Value['email'].value,
              ip: this.fbError.ip
            }
        
            this.get_Email(userData);
          }
        }
      }
    );
  }

  // User Email
  get_Email(userData: object): void {

    this.loginService.send_Email(userData).subscribe(
      {
        next: (res: boolean) => { 
          this.fbError.email = res;
        },
        error: (err) => {
          this.fbError.system = false;
          this.progressbar_Show(this.fbError.system);
        },
        complete: () => {  

          let complete: number = 0;

          if(this.fbError.email)
          {            
            this.fb_Value['newPassWord'].setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
            this.fb_Value['newPassWord'].updateValueAndValidity();
            this.fb_Value['code'].setValidators([Validators.required]);
            this.fb_Value['code'].updateValueAndValidity();

            this.isCode = this.fbError.email;

            complete = 100;
          }

          this.progressbar_Show(this.fbError.email, complete);

          this.reset_fbError();
        }
      }
    );
  }

  // Login
  login(): void {
    this.loginService.login(this.fbGroup.value).subscribe(
      {
        next: (res: boolean) => { 
          this.fbError.account = res;
        },
        error: (err) => {
          this.fbError.system = false;
          this.progressbar_Show(this.fbError.system);
        },
        complete: () => {  

          let complete: number = 0;

          if(this.fbError.account)
          {            
            complete = 100;

            setTimeout(() => {
              location.reload();
            }, 2000);
          }

          this.progressbar_Show(this.fbError.account , complete);

          this.reset_fbError();
        }
      }
    );
  }

  // New PassWord
  new_PassWord(): void {
    this.loginService.update(this.fbGroup.value).subscribe(
      {
        next: (res: boolean) => { 
          this.fbError.account = res;
        },
        error: (err) => {
          this.fbError.system = false;
          this.progressbar_Show(this.fbError.system);
        },
        complete: () => {  

          let complete: number = 0;

          if(this.fbError.account)
          {            
            complete = 100;

            this.isCode = false;

            this.email();
          }

          this.progressbar_Show(this.fbError.account, complete);

          this.reset_fbError();
        }
      }
    );
  }
  
  // Progressbar Show
  progressbar_Show(status: boolean, complete: number = 0): void {

    this.progressbar_View = true;

    this.progressbar_Type = status ? 'success':'danger';

    this.progressbar_Value = 25;

    setTimeout(() => {
      this.progressbar_Value = 50;
    }, 600);

    if(complete == 100)
    {
        setTimeout(() => {
          this.progressbar_Value = complete;
        }, 1200);
    }

    setTimeout(() => {
      this.progressbar_View = false;
    }, 1600);
  }

  // Form Submit
  onSubmit(): void {

    this.progressbar_Show(true);
    
    if(this.isEmail && this.fb_Value['newPassWord'].value == null)
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
