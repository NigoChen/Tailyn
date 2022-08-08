import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  chart_Line: any = null;

  constructor(private ref: Element) { }

  ngOnInit(): void {
  }

  chart_setting(): void {

    if(this.chart_Line == null)
    {
      // this.chart_Line = new Chart('canvasPie', {
      //   'type': 'pie',
      //   'data': {
      //     'labels': this.chart_Label,
      //     'datasets': [
      //       {
      //         'data': [0,0,0,0,0,0],
      //         'backgroundColor': [
      //           'rgba(100, 255, 150, 0.4)',
      //           'rgba(70, 165, 200, 0.4)',
      //           'rgba(255, 206, 86, 0.4)',
      //           'rgba(0, 100, 255, 0.4)',
      //           'rgba(200, 60, 60, 0.4)',
      //           'rgba(150, 150, 150, 0.4)',
      //         ],
      //         'borderColor': [
      //           'rgba(100, 255, 150, 1)',
      //           'rgba(70, 165, 200, 1)',
      //           'rgba(255, 206, 86, 1)',
      //           'rgba(0, 100, 255, 1)',
      //           'rgba(200, 60, 60, 1)',
      //           'rgba(150, 150, 150, 1)',
      //         ],
      //         'borderWidth': 2,
      //       }
      //     ]
      //   },
      //   'options': {
      //     'responsive': true,
      //     'plugins': {
      //       'title': {
      //         'display': false,
      //         'text': ''
      //       }
      //     },
      //     'scales': {
      //       'yAxes': [{
      //         'ticks': {
      //           'suggestedMin': 0,
      //           'suggestedMax': 10
      //         }
      //         ,
      //         'scaleLabel': {
      //           'display': false,
      //           'labelString': ''
      //         }
      //       }],
      //       'xAxes': []
      //     }
      //   }
      // });
    }



  }

}
