import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public sideBar_Value: boolean = false;
  public navbarCollapsed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  siedeBar_Controller(): void {
    this.sideBar_Value =! this.sideBar_Value;
  }
}
