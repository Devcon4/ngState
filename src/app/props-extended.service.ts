// This is a custom class that extends the Props with specific state actions.

import { Injectable } from '@angular/core';
import { PropService } from './props.service';
import { DataService, PropModel } from './data.service';

@Injectable()
export class PropsExtendedService extends PropService {

  filterThenAdd(list: PropModel[] = []) {
    this.readList(list.filter(i => i.id !== 0));
  }

}
