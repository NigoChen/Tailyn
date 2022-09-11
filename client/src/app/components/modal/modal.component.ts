import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlertsDirective } from 'src/app/directives/alerts.directive';
import { ErrorValidators, InputValidators } from 'src/app/methods/input-validators';
import { AlertService } from 'src/app/services/alert.service';
import { ModalService } from 'src/app/services/modal.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() fbGroup: FormGroup;
  @Output() close = new EventEmitter();

  @ViewChild('modal') public modal: ElementRef<HTMLInputElement>;


  // Input Validators blur
  public inputValidators: Function = InputValidators;
  // Input Validators Error
  public errorValidators: object = ErrorValidators;

  @ViewChild(AlertsDirective) alerts: AlertsDirective;

  constructor(
    private ngbModal: NgbModal,
    private modalService: ModalService,
    config: NgbModalConfig,
    private vref: ViewContainerRef,
    private elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
    )
  {
      config.backdrop = 'static';
      config.keyboard = false;

      this.modalService.get_modal().subscribe(res => {
        if(res)
        {
          this.ngbModal.open(this.modal, {backdropClass: 'light-blue-backdrop', size: 'md', windowClass:'modal-holder'});
        }
      });
  
  }

  ngAfterContentInit(): void {
  }

  open(): void {        
    

    const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    this.alerts.viewContainerRef.clear();
    const componentRef = this.alerts.viewContainerRef.createComponent(alertComponent);
    componentRef.instance.messages = 'Nigo Chen';    
    componentRef.instance.status =  true;  

    console.log('ok');
    
    // secondChild
    
    // constructing new DOM after splitting
    // this.errorChild.nativeElement.innerHTML = `
    //   <div class="errors-head">
    //     <span class="number">${splitted[0]}</span>
    //     <span class="typo">${splitted[1]}</span>
    //   </div>
    // `;


    // this.modal_Content.((div: ElementRef) => console.log(div.nativeElement));
    // this.vref.createEmbeddedView(this.form);

    // this.ngbModal.open(this.modal, {backdropClass: 'light-blue-backdrop', size: 'md', windowClass:'modal-holder'},);
        
    
    // this.ngbModal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
    //   this.closeResult = `Closed with: ${result}`;  
    // }, (reason) => {  
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
    // }); 
    

    // if (reason === ModalOfDismissReasons.ESC) {  
    //   return 'by pressing ESC';  
    // } else if (reason === ModalOfDismissReasons.BACKDROP_CLICK) {  
    //   return 'by clicking on a backdrop';  
    // } else {  
    //   return  `with: ${reason}`;  
    // }  
  }

  // close(): void {
  //   this.modalService.set_modal(false);
  //   this.ngbModal.dismissAll();
  // }
}
