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
          console.log(this.editMode);
          this.item = this.storageService.getItem(this.id);
          console.log('edit-list component new id: ' + this.id);
        }
      );

    // const id = +this.route.snapshot.params['id'];
    // this.item = this.storageService.getItem(this.id);
    // this.itemName = this.item.name;
  }

  goBackButton() {
    this.router.navigate(['/list']);
  }

  onSaveEdit(itemName: string) {
    this.storageService.editItem(this.id, itemName);
    this.router.navigate(['/list']);
    console.log('(edit-list) save _edit_ id: ' + this.id);
  }

  onSaveNew (itemName: string) {
    this.storageService.addItem(itemName);
    this.router.navigate(['/list']);
    console.log('(edit-list) save _new_ id: ' + this.id);
  }
}
