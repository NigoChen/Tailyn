import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
})
export class SidebarComponent implements OnInit {

  @Input('sidebar') sidebar: any;

  constructor(private loadingService: LoadingService, private loginService: LoginService) {}

  ngOnInit(): void {}

  logout(): void {

    this.loadingService.set_Loading(true);
    
    this.loginService.logout();
    
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
