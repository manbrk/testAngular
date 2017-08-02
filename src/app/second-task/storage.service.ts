import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  localStorageListName = 'lst';
  list: {id: number, name: string}[] = [];

  uniqueId() {
    if (this.list.length === 0) {
      return 0;
    }
    return Math.max.apply(Math, this.list.map(list => list.id)) + 1;
  }

  addItem(name: string) {
    const id = this.uniqueId();
    this.list.push({
      id: id,
      name: name
    });
    localStorage.setItem(this.localStorageListName, JSON.stringify(this.list));
  }

  getItem(id: number) {
    return this.list.find((i) => i.id === id);
  }

  editItem (id: number, name: string) {
    this.getItem(id).name = name;
    localStorage.setItem(this.localStorageListName, JSON.stringify(this.list));
  }

  removeItem(item) {
    this.list.splice(this.list.indexOf(item), 1);
    localStorage.setItem(this.localStorageListName, JSON.stringify(this.list));
  }

  getList() {
    if ( localStorage.length > 0 ) {
      this.list = JSON.parse(localStorage.getItem(this.localStorageListName));
    }
    return this.list;
  }
}
