import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  NgbPaginationModule, 
  NgbAlertModule, 
  NgbCollapseModule,
  NgbDropdownModule,
 } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule
  ],
  exports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule,
  ]
})
export class BootstrapModule { }
