import { ComponentFactoryResolver, Injectable, ViewChild } from '@angular/core';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertsDirective } from '../directives/alerts.directive';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  @ViewChild(AlertsDirective) alerts: AlertsDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  show(): void {
    const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    this.alerts.viewContainerRef.clear();
    const componentRef = this.alerts.viewContainerRef.createComponent(alertComponent);
    componentRef.instance.messages = 'Nigo Chen';
    componentRef.instance.status = false;
  }
}
