import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public status_View: object = {
    loading: false,
    error: false
  } as {
    loading: boolean;
    error: boolean;
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.status_View);    
  }

  get canDeactivate() {
    return true;
  }  

  onActivate(event: any){ // 參數

    console.log(event);
    // this.status_View = new BehaviorSubject<object>({loading: false, error: false});
  }
  
  onDeactivate(event: any){ // 切換
    console.log(event);
    console.log("onDeactivate");
  }

  onAttach(event: any) {
    // console.log(event);
    console.log("onAttach");
  }
  
  onDetach(event: any) {
    // console.log(event);
    console.log("onDetach");
  }
}
