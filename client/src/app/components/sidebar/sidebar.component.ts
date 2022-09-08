import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { User } from 'src/app/interfaces/user';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent implements OnInit {

  @Input('sidebar') sidebar: any;

  // User
  public user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = { jNumber: '', name: '', lv: 1 };
    this.user_Profile();
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

  // Logout
  logout(): void {
    this.loginService.logout();
  }
}
