import {Component, OnInit} from '@angular/core';
import {StorageService} from './storage.service';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {
  list: {id: number, name: string}[] = [];

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.list = this.storageService.list;
  }

  add(item: string) {
    this.storageService.addItem(item);
  }

}
