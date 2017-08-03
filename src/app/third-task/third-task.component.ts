import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent implements OnInit {
  table1 = [
    // {x: 1, y: 6},
    // {x: 2, y: 7},
    // {x: 3, y: 8},
    // {x: 4, y: 9},
    // {x: 5, y: 10},
  ];

  table2 = [];

  evenNum = [2, 4, 6, 8, 10];

  constructor() { }

  ngOnInit() {
    this.getRandomNoDoubles(this.evenNum);

    for (let i = 0; i < 5; i++) {
      this.table1.push({
        x: this.getRandom(1, 10),
        y: this.getRandom(1, 10)
      });
      this.table2.push({
        x: this.evenNum[i],
        y: this.getRandom(1, 10)
      });
    }
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomNoDoubles(array) {
    let i = array.length,
        j = 0,
        temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }



}
