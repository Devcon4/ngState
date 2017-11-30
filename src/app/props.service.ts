// This would be generated from a matching Prop Controller.

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService, PropModel } from './data.service';
import { IActionable } from './ngState';

@Injectable()
export class PropService implements IActionable<PropModel> {
  readonly _subject: BehaviorSubject<PropModel | PropModel[]> = BehaviorSubject.create();

  constructor(private dataService: DataService) { }

  getState() {
    return this._subject;
  }

  clear() {
    this._subject.next(undefined);
  }

  read(id: number) {
    this.dataService.Props.read(id).subscribe(this._subject.next);
  }

  readList(list: PropModel[] = []) {
    this.dataService.Props.readList(list).subscribe(this._subject.next);
  }

  readAll() {
    this.dataService.Props.readAll().subscribe(this._subject.next);
  }

  create(model: PropModel) {
    this.dataService.Props.create(model).subscribe(this._subject.next);
  }

  deleteById(id: number) {
    this.dataService.Props.deleteById(id).subscribe(this._subject.next);
  }

}
