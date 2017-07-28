import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
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
    return Math.max.apply(Math, this.list.map(list => list.id))
  }

  addItem(name: string) {
    this.list.push({
      id: this.uniqueId() + 1,
      name: name
    });
    // console.log('id ' + this.uniqueId() + 1);
  }

  getItem(id: number) {
    const item = this.list.find(
      (i) => {
        return i.id === id;
      }
    );
    return item;
  }

  editItem (id: number, name: string) {
    this.list[id] = {
      id: id,
      name: name
    }
  }

  removeItem(id: number) {
    console.log(id, this.list[id]);
    this.list.splice(id, 1);
  }

  getList() {
    return this.list;
  }
}
