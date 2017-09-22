import { Component } from '@angular/core';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent {
  arr = Array;
  num = 9;

  image = 'http://via.placeholder.com/200x200';

  menu = [
    {
      menuName: 'Beauty Menu 1',
      menuIcon: 'star_border'
    },
    {
      menuName: 'Beauty Menu 2',
      menuIcon: 'star_border'
    },
    {
      menuName: 'Beauty Menu 3',
      menuIcon: 'star'
    }
  ];
}
