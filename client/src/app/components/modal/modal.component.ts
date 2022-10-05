import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlertsDirective } from 'src/app/directives/alerts.directive';
import { Alert } from 'src/app/interfaces/alert';
import { Modal } from 'src/app/interfaces/modal';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { AlertService } from 'src/app/services/alert.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  public form: TemplateRef<any>;
  public fbGroup: FormGroup;
  public errorValidators: object = ErrorValidators;
  public alerts: Alert;

  // Modal 
  @ViewChild('modalForm') public modalForm: ElementRef<HTMLInputElement>;
  @ViewChild('modalSM') public modalSM: ElementRef<HTMLInputElement>;

  constructor(
    private ngbModal: NgbModal,
    private modalService: ModalService,
    config: NgbModalConfig,
    private alertService: AlertService,
    private vref: ViewContainerRef,
    private elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private loadingService: LoadingService,
    private loginService : LoginService,
    private employeeService: EmployeeService)
    {
      config.backdrop = 'static';
      config.keyboard = false;

      this.alerts = {
          status: false,
          type: 'danger',
          message: '...'
      }
    }

  ngOnInit(): void {
    this.modalService.get_modal().subscribe((res: Modal) => {
      if(res.show)
      {
        if(res.status != 'delete')
        {
          this.ngbModal.open(this.modalForm, {backdropClass: 'light-blue-backdrop', size: res.size, windowClass:'modal-holder'});
        }
        else
        {
          this.ngbModal.open(this.modalSM, {backdropClass: 'light-blue-backdrop', size: 'sm', windowClass:'modal-holder'});
        }
      }
      else
      {
        this.close();
      }
    });
    this.modalService.get_FormGroup().subscribe(res => this.fbGroup = res);
    this.modalService.get_Form().subscribe(res => this.form = res);
    this.alertService.get_Alert().subscribe(res => this.alerts = res);
  }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string} {
    
    // if(Number.isInteger(Object.values(this.fbGroup.value)))
    // {
    //   return Object.values(this.fbGroup.value).toString() || '';
    // }

    // return '0';
    return Object.values(this.fbGroup.value) || '';
  }
  
  // open(): void {        
  //   const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  //   this.alerts.viewContainerRef.clear();
  //   const componentRef = this.alerts.viewContainerRef.createComponent(alertComponent);
  //   componentRef.instance.messages = 'Nigo Chen';    
  //   componentRef.instance.status =  true;  
    
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
  // }

  close(): void {
    this.ngbModal.dismissAll();
    this.alertService.clear_Alert();
  }

  // Delete
  delete(): void {
    const id: number = parseInt(this.fb_Value_Index[0]);
    this.modalService.set_Delete(id);
    this.close();
  }

  save(): void {
    if(this.fbGroup.valid && this.fb_Value_Index[0])
    {      
      this.modalService.set_Update(this.fbGroup);
    }
    else
    {
      this.modalService.set_Create(this.fbGroup);
    }
  }
}
