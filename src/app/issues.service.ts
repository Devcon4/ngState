// Using a base service instead of being generated.

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService, IssueModel } from './data.service';
import { IActionable, BaseService } from './ngState';

@Injectable()
export class IssueService extends BaseService<IssueModel> {
  constructor(private dataService: DataService) {
    super(dataService.Issues);
  }

  readAllWithMatching(matchingIds: number[]) {
    this.dataService.Issues.readAll()
      .map((list: IssueModel[]) => list.filter(i => matchingIds.some(m => m === i.id)))
      .subscribe(this._subject.next);
  }
}
