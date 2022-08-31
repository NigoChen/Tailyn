import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  NgbPaginationModule, 
  NgbAlertModule, 
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModal
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
    NgbPaginationModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule,
  ]
})
export class BootstrapModule { }
