import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  item: {id: number, name: string};
  id: number;
  editMode = false;

  constructor(private storageService: StorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(params);
          this.editMode = params['id'] != null;
          this.item = this.storageService.getItem(this.id);
        }
      );
  }

  goBackButton() {
    this.router.navigate(['/list']);
  }

  onSaveEdit (itemName: string) {
    this.storageService.editItem(this.id, itemName);
    this.router.navigate(['/list']);
  }

  onSaveNew (itemName: string) {
    this.storageService.addItem(itemName);
    this.router.navigate(['/list']);
  }
}
