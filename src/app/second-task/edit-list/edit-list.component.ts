import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  item: {id: number, name: string};
  itemName: string;

  constructor(private storageService: StorageService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.item = this.storageService.getItem(id);
    this.itemName = this.item.name;
    this.route.params
      .subscribe(
        (params: Params) => {
          this.item = this.storageService.getItem(+params['id']);
        }
      );
  }

  onEdit() {

  }
}
