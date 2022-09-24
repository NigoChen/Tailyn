import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  // User
  public user: User;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private elementRef: ElementRef) {}

  ngAfterViewInit() {
    let navLink = this.elementRef.nativeElement.querySelectorAll('.nav-link')[0];
    
    // Page Reload Check Url
    // if(this.router.url.includes('/Tailyn'))
    if(this.router.url == '/Tailyn')
    {
      navLink.classList.add('text-danger', 'font-weight-bold');
    }
    else
    {
      navLink.classList.remove('text-danger', 'font-weight-bold');
    }

    // When routerLinkActive
    this.router.events.subscribe((event: Event) => {
      
      if(event instanceof NavigationStart)
      {
        if(event.url == '/Tailyn' || event.url == '/')
        {
          navLink.classList.add('text-danger', 'font-weight-bold');            
        }
        else
        {
          navLink.classList.remove('text-danger', 'font-weight-bold');
        }
      }

      if (event instanceof NavigationEnd)
      {

      }
    });    

    // Only page reload
    // this.activatedRoute.data.subscribe(data => {
    //     console.log(data);
        
    // });

    // Only page reload
    // this.activatedRoute.firstChild.data.subscribe(data => {
    //     console.log(data);
        
    // });
  }

  ngOnInit(): void {
    this.user = { jNumber: '', name: '', lv: 1 };
    this.user_Profile();
  }

  // User Profile
  user_Profile(): void {

    let user_Session: User | null = this.loginService.read_User_SessionStorage();

    if (user_Session != null)
    {
        this.user = user_Session;
    }
    else
    {
      this.logout();
    }
  }

  // Logout
  logout(): void {
    this.loginService.logout();
  }
}
