import {Component, OnInit} from '@angular/core';
import {StorageService} from './storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {
  list: {id: number, name: string}[] = [];

  constructor(private storageService: StorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.list = this.storageService.getList();
  }

  onNew() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  onRemove(id) {
    this.storageService.removeItem(id);
  }

  onDebug(item, i) {
    console.log('(onClick) on LI item_id: ' + item + ' (onClick) on Index: ' + i)
  }

  getList() {
    console.log(this.list.map(list => list.id));
    console.log(this.list.map(list => list.name));
    console.log(this.list);
  }

  // onEdit() {
  //   this.router.navigate(['edit'], {relativeTo: this.route});
  // }

}
