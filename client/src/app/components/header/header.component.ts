import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public sideBar_Show: boolean = false;
  // @ViewChild(SidebarComponent, { static: false }) siderbar: SidebarComponent;

  constructor(private router: Router) {}

  ngOnInit(): void { 
    this.router.events.subscribe((event: Event) => {      
      if (event instanceof NavigationEnd)
      {        
        this.sideBar_Show = false;
      }
    }); 
  }

  // Window Resize
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.clientHeight; 

      // (this.siderbar['elementRef'].nativeElement as HTMLElement).style.display = 'none';
        // this.siderbar['elementRef'].nativeElement.style.transition = 'none';

      if(this.sideBar_Show && (w > 767))
      {
        this.sideBar_Show = false;
      }
  }
}
