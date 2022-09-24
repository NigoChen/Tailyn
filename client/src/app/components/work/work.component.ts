import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private loadingService: LoadingService,
    ) { }

  ngOnInit(): void {

    this.loadingService.set_Dashboard_Loading(false);
  }

}
