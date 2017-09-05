import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent implements OnInit {
  table: number;

  table1 = [];
  table2 = [];
  tbl1: any;
  tbl2: any;

  evenNum = [2, 4, 6, 8, 10];

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

    this.getJson()
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

  getJson() {
    this.tbl1 = JSON.stringify(this.table1);
    this.tbl2 = JSON.stringify(this.table2);
  }

  setTable(num: number) {
    this.table = num;
  }

}
