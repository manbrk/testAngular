import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  generatedId: number;
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

  uniqueId() {
    if (this.list.length === 0) {
      return 0;
    }
    this.generatedId = Math.max.apply(Math, this.list.map(list => list.id)) + 1;
    console.log('new uniqueId is ' + this.generatedId);
    return this.generatedId;
  }
  // return 'id' + Math.random().toString(16).slice(2)

  addItem(name: string) {
    this.list.push({
      id: this.uniqueId(),
      name: name
    });
  }

  getItem(id: number) {
    return this.list.find((i) => i.id === id);
  }

  editItem (id: number, name: string) {
    this.getItem(id).name = name;
  }

  removeItem(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  getList() {
    return this.list;
  }
}
