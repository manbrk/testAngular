import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() table: {x: number, y: number}[];

  xAxisTable: number[];
  yAxisTable: number[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [], label: 'graph'}
  ];

  ngOnInit() {
    this.xAxisTable  = this.table.map( (x) => x.x );
    this.yAxisTable  = this.table.map( (y) => y.y );
    this.barChartLabels = this.xAxisTable.map(String);
    let data = this.yAxisTable;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
