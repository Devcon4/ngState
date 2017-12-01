// This would be generated from a matching Prop Controller.

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService, PropModel } from './data.service';
import { IActionable } from './ngState';

@Injectable()
export class PropService implements IActionable<PropModel> {
  readonly state: BehaviorSubject<PropModel | PropModel[]> = BehaviorSubject.create();

  constructor(private dataService: DataService) { }

  clear() {
    this.state.next(undefined);
  }

  read(id: number) {
    this.dataService.Props.read(id).subscribe(this.state.next);
  }

  readList(list: PropModel[] = []) {
    this.dataService.Props.readList(list).subscribe(this.state.next);
  }

  readAll() {
    this.dataService.Props.readAll().subscribe(this.state.next);
  }

  create(model: PropModel) {
    this.dataService.Props.create(model).subscribe(this.state.next);
  }

  deleteById(id: number) {
    this.dataService.Props.deleteById(id).subscribe(this.state.next);
  }

}
