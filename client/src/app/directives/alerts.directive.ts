import {Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlerts]'
})
export class AlertsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
