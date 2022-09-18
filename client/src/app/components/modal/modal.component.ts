import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlertsDirective } from 'src/app/directives/alerts.directive';
import { ErrorValidators, InputValidators, Reset_Validators } from 'src/app/methods/input-validators';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ModalService } from 'src/app/services/modal.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  // @Input() fbGroup: FormGroup;
  // @Input() errorValidators: object = ErrorValidators;
  // @Input() inputValidators: Function = InputValidators;
  
  public form: TemplateRef<any>;
  public formControls: object;
  public fbGroup: FormGroup;
  public errorValidators: object = ErrorValidators;
  public submit: Function;
  public update: Function;
  public create: Function;
  public read: Function;
  public user_Profile: Function;
  public result_Data: Array<any>;
  public result_List: Array<any>;

  // Modal 
  @ViewChild('modalForm') public modalForm: ElementRef<HTMLInputElement>;
  @ViewChild('modalSM') public modalSM: ElementRef<HTMLInputElement>;
  // Alert
  @ViewChild(AlertsDirective) alerts: AlertsDirective;

  constructor(
    private ngbModal: NgbModal,
    private modalService: ModalService,
    config: NgbModalConfig,
    private vref: ViewContainerRef,
    private elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private loadingService: LoadingService,
    private loginService : LoginService,
    private employeeService: EmployeeService, 
    )
  {
      config.backdrop = 'static';
      config.keyboard = false;
  }

  ngOnInit(): void {
    this.modalService.get_modalForm().subscribe(res => this.toggle(res));
    this.modalService.get_modalSM().subscribe(res => {
      if(res)
      {
        this.ngbModal.open(this.modalSM, {backdropClass: 'light-blue-backdrop', size: 'sm', windowClass:'modal-holder'});
      }
    });
    this.modalService.get_FormControls().subscribe(res => this.formControls = res);
    this.modalService.get_FormGroup().subscribe(res => this.fbGroup = res);
    this.modalService.get_Form().subscribe(res => this.form = res);
    this.modalService.get_Submit().subscribe(res => this.submit = res);
    this.modalService.get_Update().subscribe(res => this.update = res);
    this.modalService.get_Create().subscribe(res => this.create = res);
    this.modalService.get_Read().subscribe(res => this.read = res);
    this.modalService.get_User_Profile().subscribe(res => this.user_Profile = res);
    this.modalService.get_Result_List().subscribe(res => this.result_List = res);
    this.modalService.get_Result_Data().subscribe(res => this.result_Data = res);
  }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string} {
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


  // Toggle Modal Show / hide
  toggle(arr: Array<string>): void {
    
    if(arr[0] == 'show')
    {
      this.ngbModal.open(this.modalForm, {backdropClass: 'light-blue-backdrop', size: 'md', windowClass:'modal-holder'});
    }
    else
    {
      this.modalService.set_modalSM(false);
      this.ngbModal.dismissAll();
    }
  }

  // Delete
  delete(): void {

  }
}
