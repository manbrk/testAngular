import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  counterId = 2;
  list = [
    {
      id: 0,
      name: 'some item'
    },
    {
      id: 1,
      name: 'another item'
    },
  ];

  addItem(name: string) {
    this.list.push({
      id: this.counterId,
      name: name
    });
    this.counterId += 1;
  }


  // id: any = 0;
  // listItems = [];
  //
  // store(name: string) {
  //   this.listItems.push({id: this.id, name: name});
  //   localStorage.setItem(this.id, name);
  //   this.id += 1;
  // };
  //
  // clear() {
  //   localStorage.clear();
  //   this.id = 0;
  //   this.listItems = [];
  // };
  //
  // getList() {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     this.listItems.push(localStorage.getItem(localStorage.key(i)));
  //   }
  //   return this.listItems = this.listItems.slice(0);
  // }
}
