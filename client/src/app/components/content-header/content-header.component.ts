import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { User } from 'src/app/interfaces/user';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  // User
  public user: User;
  // Modal
  // private modal_Subscription: Subscription;



  // @Output() refresh_: EventEmitter<any> = new EventEmitter<any>();
  // @Output() search_: EventEmitter<any> = new EventEmitter<any>();
  // @Output() open_: EventEmitter<any> = new EventEmitter<any>();
  // @Output() update_: EventEmitter<any> = new EventEmitter<any>();
  // @Output() delete_: EventEmitter<any> = new EventEmitter<any>();
  // @Input() user_: User | null;
  // @Input() fb_Value_:  { [key: string]: AbstractControl};

  constructor(private loginService: LoginService, private modalService: ModalService) {  
  }

  ngOnInit(): void {
    this.user = { jNumber: '', name: '', lv: 1};

    this.user_Profile();
  }

  // User Profile
  user_Profile(employee: Employee[] = []): void {

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
  
  // Open
  open(): void {
    this.modalService.set_modal(true);
    // this.modal.open();
    // this.fbGroup.reset();
    // this.reset_Validators();      
    // this.fb_Value['e_ConfirmPassword'].setValidators([Validators.required]); 
    // this.fb_Value['e_ConfirmPassword'].updateValueAndValidity();
    // this.fb_Value['e_Lv'].patchValue('1');
  }

  
  // Refresh
  refresh(): void {}

  // Search
  search(): void {}

  // Update
  update(): void {

  }

  // Delete
  delete(): void {}

}
