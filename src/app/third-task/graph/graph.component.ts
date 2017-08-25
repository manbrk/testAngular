import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  @Input() table1: { x: number, y: number }[];
  @Input() table2: { x: number, y: number }[];

  table1X = this.table1.map( (coord) => coord.x);
  // table1X = [3, 5, 9, 8, 1];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: number[] = [2, 6, 10, 4, 8];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: this.table1X, label: 'Series A'},
    // {data: this.table1X, label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

// export class GraphComponent implements OnInit {
//   @Input() table1: { x: number, y: number }[];
//   @Input() table2: { x: number, y: number }[];
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
