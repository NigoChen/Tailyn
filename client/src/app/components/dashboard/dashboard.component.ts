import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // loading Status
  public dashboard_Loading: Subscription;
  public is_Loading: boolean;

  constructor(private loadingService: LoadingService, private loginService: LoginService)
  {
    this.dashboard_Loading = this.loadingService.get_Dashboard_Loading().subscribe();
    this.is_Loading = false;
  }
  ngOnInit(): void {    
    this.loadingService.get_Dashboard_Loading().subscribe(res => this.is_Loading = res);
  }

  get canDeactivate() {
    return true;
  }  

  onActivate(event: any){ // 參數
    // console.log(event);
    
    // setTimeout(() => {
    //   if(event.result_Data.length)
    //   {
    //     this.loadingService.set_Loading(false);
    //   }
    // }, 1000);
  }
  
  onDeactivate(event: any){ // 切換
    console.log(event);
    console.log("onDeactivate");
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
    this.dashboard_Loading.unsubscribe();
  }
}
