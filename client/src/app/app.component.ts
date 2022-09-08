import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // loading Status
  public app_Loading: Subscription;
  public loading_val: boolean = false;

  constructor(private loadingService: LoadingService, private router: Router)
  {
    this.app_Loading = this.loadingService.get_App_Loading().subscribe();
    this.loading_val = false;
  }

  ngOnInit(): void {

    this.loadingService.get_App_Loading().subscribe(res => this.loading_val = res);
    // let test:any = this.router.getCurrentNavigation().extras.state.loading;

    // console.log(test);
    
    // this.router.events.subscribe(event => {

      // console.log(event);
      
      // if(event instanceof NavigationEnd) {
        //  alert('navigation succeeded');
      // }
    // })
  }

  ngOnChanges(changes: SimpleChanges): void { 
    // console.log('change');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
    this.app_Loading.unsubscribe();
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // this.loginComponent.status_View.subscribe(res => {
    //   console.log(res);
      
    // });
  }

  onActivate(event: any){ // 刷新頁面

    this.app_Loading.unsubscribe();

    if(event)
    {
      // setTimeout(() => {
      //   console.clear();
      // }, 1000);
    }
  }

  onDeactivate(event: any){ // 離開本頁
    
    if(event)
    {
      // setTimeout(() => {
      //   console.clear();
      // }, 1000);
    }
    // console.log("onDeactivate");
  }

  ngOnAttach(): void {
    console.log(this, 'attached!');
  }

  ngOnDetach(): void {
    console.log(this, 'detached!');
  }
}
