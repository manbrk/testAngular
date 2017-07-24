import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // for placeholder auto-repeat
  arr = Array;
  num: number = 9;

  title = 'Deluxe Beauty Shop';
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
