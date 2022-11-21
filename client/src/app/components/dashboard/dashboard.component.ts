import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // loading Status
  private dashboard_Loading: Subscription;
  public is_Loading: boolean = true;

  constructor(
              private loadingService: LoadingService,
              private modalService: ModalService,
              private loginService: LoginService){}

  ngOnInit(): void {    
  }
  
  ngAfterViewInit(): void {
    this.dashboard_Loading = this.loadingService.get_Dashboard_Loading().subscribe(res => this.is_Loading = res);    
  }

  get canDeactivate() {
    return true;
  } 

  onActivate(event: any){ // 參數

    // let user_Session: Employee | null = this.loginService.read_User_SessionStorage();

    // if(user_Session)
    // {
    //   this.modalService.set_User_Profile(user_Session);
    // }
    // else
    // {
    //   // Loading View
    //   this.loadingService.set_Dashboard_Loading(true);          
    //   // Logout
    //   setTimeout(() => {
    //     this.loginService.logout();
    //   }, 3000);
    // }
    
    
    // console.log(event);
    
    // setTimeout(() => {
    //   if(event.result_Data.length)
    //   {
    //     this.loadingService.set_Loading(false);
    //   }
    // }, 1000);
  }
  
  onDeactivate(event: any){ // 切換
    // console.log(event);
    // console.log("onDeactivate");
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
    this.dashboard_Loading.unsubscribe();
  }
}
