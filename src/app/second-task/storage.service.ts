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

  getItem(id: number) {
    const item = this.list.find(
      (i) => {
        return i.id === id;
      }
    );
    return item;
  }

  editItem(id: number, name: string) {
    this.list.push({
      id: id,
      name: name
    });
  }

  removeItem(index: number) {
    this.list.splice(index, 1);
  }

  getList() {
    return this.list;
  }
}
