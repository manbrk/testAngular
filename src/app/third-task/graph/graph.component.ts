import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() table1: { x: number, y: number }[];
  @Input() table2: { x: number, y: number }[];

  constructor() { }

  ngOnInit() {
  }

}
