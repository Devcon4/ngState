// Would be generated from a matching Issues controller.

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService, IssueModel } from './data.service';
import { IActionable } from './ngState';

@Injectable()
export class IssueService implements IActionable<IssueModel> {
  readonly _subject: BehaviorSubject<IssueModel | IssueModel[]> = BehaviorSubject.create();

  constructor(private dataService: DataService) { }

  getState() {
    return this._subject;
  }

  clear() {
    this._subject.next(undefined);
  }

  read(id: number) {
    this.dataService.Issues.read(id).subscribe(this._subject.next);
  }

  readList(list: IssueModel[] = []) {
    this.dataService.Issues.readList(list).subscribe(this._subject.next);
  }

  readAll() {
    this.dataService.Issues.readAll().subscribe(this._subject.next);
  }

  create(model: IssueModel) {
    this.dataService.Issues.create(model).subscribe(this._subject.next);
  }

  deleteById(id: number) {
    this.dataService.Issues.deleteById(id).subscribe(this._subject.next);
  }

}
