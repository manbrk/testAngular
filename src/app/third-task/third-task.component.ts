import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent implements OnInit {
  coordinates = [
    {x: 1, y: 6},
    {x: 2, y: 7},
    {x: 3, y: 8},
    {x: 4, y: 9},
    {x: 5, y: 10},
  ];

  constructor() { }

  ngOnInit() {
  }

}
