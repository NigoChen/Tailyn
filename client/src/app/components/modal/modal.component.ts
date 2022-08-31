import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input('form') form: TemplateRef<any>;
  @ViewChild('modal') modal: any;
  @ViewChild('formContent') modal_Content: ElementRef<HTMLInputElement>;

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    private vref: ViewContainerRef
    ) {
      config.backdrop = 'static';
      config.keyboard = false;
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

    
    this.modalService.open(this.modal, {backdropClass: 'light-blue-backdrop', size: 'sm', windowClass:'modal-holder'});
    
    // this.vref.createEmbeddedView(this.form);
    // this.modal_Content.nativeElement.innerHTML = this.form.elementRef.nativeElement;


    console.log(this.form.elementRef.nativeElement);
    

    // console.log(this.modal_Content.nativeElement.innerHTML);
    
    
  }

}
