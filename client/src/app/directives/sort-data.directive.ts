import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Output, EventEmitter, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Repair } from '../interfaces/repair';
import { FilterSortService } from '../services/filter-sort.service';

export type SortColumn = keyof Repair | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };


export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}

@Directive({
  selector: '[appSortData]',
  host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class SortDataDirective implements OnInit {

	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<any>();
	@Input() appSortData;
  @Input() sortBy: string;
  // sorted: EventEmitter<SortedData>;


  // @Input() @HostBinding('class.img') isMyCirclePic:boolean;

  // @Output() filterData: EventEmitter<any> = new EventEmitter<any>();

  // constructor(private el:ElementRef, private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>){

  constructor(
    private elementRef:ElementRef,
    @Inject(DOCUMENT) private  document: Document, private filterSortService: FilterSortService){}

  ngOnInit(): void {
      // console.log(this.filterData);
      
  }

  ngAfterViewInit(): void {

    // const views:any = this.viewContainerRef.createEmbeddedView(this.templateRef);



    // fromEvent(this.document,'click').subscribe(r => {

    //   console.log(this.elementRef.nativeElement);
      
    // })



    
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // console.log(this.appFilterData);
    
  }

  rotate() {
    if(this.appSortData.length > 1)
    {
      const sortList: boolean = this.appSortData[0][this.sortBy] < this.appSortData[1][this.sortBy] ? true : false;    

      const result = this.appSortData.slice().sort((a: any, b: any) => {  
        
        
        console.log('a==='+a[this.sortBy]);
        console.log('b==='+b[this.sortBy]);
        if(Number(a[this.sortBy]))
        {

          if(Number(a[this.sortBy]) > Number(b[this.sortBy]))
          {

            console.log('>>>');
            return -1;
          }
          else
          {
            console.log('<<<');
            return -1;
          }
          
          return (Number(a[this.sortBy]) > Number(b[this.sortBy])) ? -1 : (Number(a[this.sortBy]) > Number(b[this.sortBy])) ? 0 : -1;

          
          if( (Number(a[this.sortBy]) > Number(b[this.sortBy]))) return -1;
          return sortList ? (Number(a[this.sortBy]) - Number(b[this.sortBy])) : (Number(b[this.sortBy]) - Number(a[this.sortBy]));
          // return (Number(a[this.sortBy]) > Number(b[this.sortBy])) ? -1 ;
        }
        else
        {
          // return sortList ? a[this.sortBy].localeCompare(b[this.sortBy]) : b[this.sortBy].localeCompare(a[this.sortBy]);
          return sortList ? (a[this.sortBy].length - b[this.sortBy].length) : (b[this.sortBy].length - a[this.sortBy].length) ? -1 : 0;
        }        
      });
      
      this.filterSortService.set_data_(result);
      console.log(result);
    }
    

    
    
    // const result: any = this.appFilterData.slice().reverse();
    // console.log(result);
    // var dateA = new Date(a.date), dateB = new Date(b.date)
    // return dateA - dateB
    
  //   this.result_Lists = this.result_Lists.subscribe().filter(res => {      
  //     return res.r_SerialNumber.includes('444')
  //   });
	// 	this.sort.emit(this.result_Lists);    
	// }

  // @HostListener('click', ['$event.target']) onClick(btn) {
    

  //   console.log(this.result_List);
  }
}
