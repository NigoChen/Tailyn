import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sideBar_Value: boolean = false;

  public navbarCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  siedeBar_Controller(): void {
    this.sideBar_Value =! this.sideBar_Value;
  }
}
