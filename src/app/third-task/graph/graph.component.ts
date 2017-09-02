import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() table2: {x: number, y: number}[];

  xAxisTable2: number[];
  yAxisTable2: number[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [], label: 'Table 2'}
  ];

  ngOnInit() {
    this.xAxisTable2  = this.table2.map( (x) => x.x );
    this.yAxisTable2  = this.table2.map( (y) => y.y );
    this.barChartLabels = this.xAxisTable2.map(String);
    let data = this.yAxisTable2;
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
