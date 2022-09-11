import { ComponentFactoryResolver, Directive } from '@angular/core';

@Directive({
  selector: '[appAlerts]'
})
export class AlertsDirective {

  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

}
