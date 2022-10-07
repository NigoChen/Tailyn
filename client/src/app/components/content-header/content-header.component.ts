import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  // User
  public user: Employee;
  // FormGroup
  public fbGroup: FormGroup;
  // Input Search Text 
  public searchText: string;
  // Delay Time
  public delayTime: boolean;
  // check lv
  public check_Lv: boolean;

  // Modal
  // private modal_Subscription: Subscription;
  // @Input() user_: User | null;
  // @Input() fb_Value_:  { [key: string]: AbstractControl};

  constructor(
    private modalService: ModalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){
      this.modalService.get_User_Profile().subscribe((res: Employee) => this.user = res);
      this.modalService.get_FormGroup().subscribe(res => this.fbGroup = res); 
    }

  ngOnInit(): void {
    this.searchText = '';
    this.delayTime = true;
    this.check_Active_Roueter();
  }

  // FormGroup Controls Value By Index
  get fb_Value_Index(): { [key: number]: string} {
    return Object.values(this.fbGroup.value) || '';
  }

  // Create
  create(): void {
    this.modalService.set_modal({status: 'create', show: true, size: 'md'});
  }

  // Update
  update(): void {
    this.modalService.set_modal({status: 'update', show: true, size: 'md'});
  }
  
  // Read
  read(): void {
    this.delayTime = false;
    this.searchText = '';
    this.modalService.set_Read(true);
    setTimeout(() => {
      this.delayTime = true;
    }, 5000);
  }

  // Search
  search(): void {
    this.modalService.set_Search(this.searchText);    
  }

  // Delete
  delete(): void {
    this.modalService.set_modal({status: 'delete', show: true, size: 'sm'});
  }

  // Check Active Router And User Lv
  check_Active_Roueter(): void {
    // When reload
    if(this.activatedRoute.snapshot.firstChild.url[0].path == 'Employee' && this.user.e_Lv != 3)
    {
      this.check_Lv = false;
    }
    else if(this.user.e_Lv < 2)
    {
      this.check_Lv = false;
    }
    else
    {
      this.check_Lv = true;
    }

    // When router active
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
      {
        if(event.url == '/Tailyn/Employee' && this.user.e_Lv != 3)
        {
          this.check_Lv = false;
        }
        else if(this.user.e_Lv < 2)
        {
          this.check_Lv = false;
        }
        else
        {
          this.check_Lv = true;
        }
      }
    });
  }
  
  // Check FormGroup Value
  get check_Value(): boolean {
    let lv: boolean = false;
    if(this.fb_Value_Index[0])
    {
      // object to array
      for (const [key, val] of Object.entries(this.fbGroup.value))
      {        
        if(val != null)
        {          
          if(val != '' && (val == this.user.e_JobNumber) || this.user.e_Lv == 3)
          {
            return true;
          }
        }
      }
    }
    return false;
  }
}
