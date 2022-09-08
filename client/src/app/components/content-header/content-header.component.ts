import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {

  @Output() refresh_: EventEmitter<any> = new EventEmitter<any>();
  @Output() search_: EventEmitter<any> = new EventEmitter<any>();
  @Output() open_: EventEmitter<any> = new EventEmitter<any>();
  @Output() update_: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete_: EventEmitter<any> = new EventEmitter<any>();
  @Input() user_: User | null;
  @Input() fb_Value_: any | null;

  constructor() {    
  }

}
