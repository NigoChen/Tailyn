import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() public status: boolean = false;
  @Input() public types: string = 'danger';
  @Input() public messages: string = '...';
  
  constructor() { }

  ngOnInit(): void {
  }

}
