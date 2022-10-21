import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterSortService } from '../services/filter-sort.service';


@Directive({
  selector: '[appFilterData]',
  host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'click_()',
	},
})
export class FilterDataDirective implements OnInit {

	@Output() sort = new EventEmitter<any>();
	@Input() appFilterData;
  @Input() filertBy: string;
  @Input() title: string;

  constructor(private filterSortService: FilterSortService){}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  click_() {
    
    console.log(this.title);
    
  }
}
