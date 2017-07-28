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

  onRemove(index) {
    this.storageService.removeItem(index);
  }

  // onEdit() {
  //   this.router.navigate(['edit'], {relativeTo: this.route});
  // }

}
