import { ComponentFactoryResolver, Injectable, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertsDirective } from '../directives/alerts.directive';
import { Alert } from '../interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // @ViewChild(AlertsDirective) alerts: AlertsDirective;
  private alerts: Subject<Alert>

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.alerts = new Subject<Alert>();
  }

  // Get Alert
  public get_Alert(): Observable<Alert> {    
    return this.alerts.asObservable();
  }

  /*
  * Set Alert
  *
  * 11 create ok
  * 12 create ng
  * 13 create err
  * 
  * 21 Read ok
  * 22 Read ng
  * 23 Read err
  * 
  * 31 upddte ok
  * 32 update ng
  * 33 update err
  * 
  * 41 delete ok
  * 42 delete ng
  * 43 delete err
  *
  */
  public set_Alert(status: any): void {    

    switch(status)
    {
      case 11:
        this.alerts.next(
          {
            status: false,
            type: 'success',
            message: '載入成功'
          }
        );
        break;
      case 12:
        this.alerts.next(
          {
            status: true,
            type: 'warning',
            message: '載入失敗'
          }
        );
        break;
      case 13:
        this.alerts.next(
          {
            status: true,
            type: 'danger',
            message: '載入失敗，系統異常'
          }
        );
        break;
      case 21:
        this.alerts.next(
          {
            status: false,
            type: 'success',
            message: '新增成功'
          }
        );
        break;
      case 22:
        this.alerts.next(
          {
            status: true,
            type: 'warning',
            message: '新增失敗，是否資料重複'
          }
        );
        break;
      case 23:
        this.alerts.next(
          {
            status: true,
            type: 'danger',
            message: '新增失敗，系統異常'
          }
        );
        break;
      case 31:
        this.alerts.next(
          {
            status: false,
            type: 'success',
            message: '更新成功'
          }
        );
        break;
      case 32:
        this.alerts.next(
          {
            status: true,
            type: 'warning',
            message: '更新失敗，是否資料重複'
          }
        );
        break;
      case 33:
        this.alerts.next(
          {
            status: true,
            type: 'danger',
            message: '更新失敗，系統異常'
          }
        );
        break;
      case 41:
        this.alerts.next(
          {
            status: false,
            type: 'success',
            message: '刪除成功'
          }
        );
        break;
      case 42:
        this.alerts.next(
          {
            status: true,
            type: 'warning',
            message: '刪除失敗'
          }
        );
        break;
      case 43:
        this.alerts.next(
          {
            status: true,
            type: 'danger',
            message: '刪除失敗，系統異常'
          }
        );
        break;
      default:
        this.alerts.next(
          {
            status: true,
            type: 'warning',
            message: status
          }
        );
        break;
    }

    // Close Alert
    setTimeout(() => {
      this.clear_Alert();
    }, 5000);
  }

  // Clear Alert
  public clear_Alert(): void {   
    this.alerts.next(
      {
        status: false,
        type: 'light',
        message: '...'
      }
    )
  }

  // show(): void {
  //   const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  //   this.alerts.viewContainerRef.clear();
  //   const componentRef = this.alerts.viewContainerRef.createComponent(alertComponent);
  //   componentRef.instance.messages = 'Nigo Chen';
  //   componentRef.instance.status = false;
  // }
}
