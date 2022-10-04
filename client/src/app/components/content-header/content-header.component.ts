import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  // User
  public user: User;
  public fbGroup: FormGroup;
   searchText: string;
  // Delay Time
  public delayTime: boolean;

  // Modal
  // private modal_Subscription: Subscription;
  // @Input() user_: User | null;
  // @Input() fb_Value_:  { [key: string]: AbstractControl};

  constructor(
    private loginService: LoginService,
    private modalService: ModalService,
    ){}

  ngOnInit(): void {
    this.searchText = '';
    this.user_Profile();
    this.delayTime = true;
    this.modalService.get_FormGroup().subscribe(res => this.fbGroup = res);  
  }

  ngAfterViewInit(): void {}

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string} {

    if(!this.fbGroup) return '';
    
    return Object.values(this.fbGroup.value) || '';
  }

  // User Profile
  user_Profile(employee: Employee[] = []): void {

    this.user = { jNumber: '', name: '', lv: 1};

    let user_Session: User | null = this.loginService.read_User_SessionStorage();
  
    if(user_Session != null)
    {
      if(employee.length)
      {
        const userData = employee.find((item: Employee, index: number) => item.e_JobNumber === user_Session!.jNumber);      
      
        if(userData != undefined)
        {  
          this.loginService.create_User_SessionStorage(userData);
          
          this.user = {
            jNumber: userData.e_JobNumber,
            name: userData.e_Name,
            lv: userData.e_Lv
          }
        }
        else
        {
          this.loginService.logout();
        }
      }
      else
      {
        this.user = user_Session;
      }
    }
    else
    {
      this.loginService.logout();
    }
  }
  
  // Create
  create(): void {
    this.modalService.set_modalMDForm(['show', 'create']);
  }

  // Update
  update(): void {
    this.modalService.set_modalMDForm(['show', 'update']);
  }
  
  // Read
  read(): void {
    this.delayTime = false;
    this.searchText = '';
    this.modalService.set_Read(true);
    setTimeout(() => {
      this.delayTime = true;
    }, 5000);
  }

  // Search
  search(): void {
    this.modalService.set_Search(this.searchText);    
  }

  // Delete
  delete(): void {
    this.modalService.set_modalSM(true);
  }
  
  // Check FormGroup Value
  get check_Value(): boolean {
    if(this.fb_Value_Index[0])
    {
      for (const [key, val] of Object.entries(this.fbGroup.value))
      {
        if(val != null)
        {          
          if(val != '' && (val == this.user.jNumber) || this.user.lv == 3)
          {
            return true;
          }
        }
      }
    }
    return false;
  }
}
