import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() fbGroup: FormGroup;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild('alerts') alerts: TemplateRef<any>;
  @ContentChild('forms') forms: TemplateRef<any>;
  @ViewChild('modal') modal: ElementRef<HTMLInputElement>;
  // @ContentChild('headers') headers: TemplateRef<any>;
  // @ContentChild('contents') contents: TemplateRef<any>;

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    private vref: ViewContainerRef
    ) {
      config.backdrop = 'static';
      config.keyboard = false;      
    }

  // FormGroup Controls Value
  get fb_Value(): { [key: string]: AbstractControl} {
    return this.fbGroup.controls;
  }

  open(): void {    

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

    this.modalService.open(this.modal, {backdropClass: 'light-blue-backdrop', size: 'md', windowClass:'modal-holder'},);
        
    
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
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

  close(): void {
    this.modalService.dismissAll();
  }
}
