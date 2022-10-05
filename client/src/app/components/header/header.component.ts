import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public sideBar_Value: boolean = false;
  public navbarCollapsed: boolean = false;
  public sideBar_Show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  siedeBar_Controller(): void {
    this.sideBar_Value =! this.sideBar_Value;
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.clientHeight;      

      if(this.sideBar_Show && (w > 767))
      {
        this.sideBar_Show = false;
      }
  }
}
