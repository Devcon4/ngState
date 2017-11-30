// Still generate a data service but we would never call it directly, only using the state services.

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IDataAccess } from './ngState';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  Issues: IDataAccess<IssueModel, Observable<IssueModel | IssueModel[]>> = {
    create: (model) => this.http.post('/', model).map(r => new IssueModel(r.json())),
    read: (id) => this.http.get(`/id=${id}`).map(r => new IssueModel(r.json())),
    readList: (list) => this.http.get(`/${list.map(i => `id=${i.id}`)}`).map(r => new IssueModel(r.json())),
    readAll: () => this.http.get('/').map(r => new Array<IssueModel>(r.json()).map(j => new IssueModel(j))),
    deleteById: (id) => this.http.delete(`/id=${id}`).map(r => new IssueModel(r.json()))
  };

  Props: IDataAccess<PropModel, Observable<PropModel | PropModel[]>> = {
    create: (model) => this.http.post('/', model).map(r => new PropModel(r.json())),
    read: (id) => this.http.get(`/id=${id}`).map(r => new PropModel(r.json())),
    readList: (list) => this.http.get(`/${list.map(i => `id=${i.id}`)}`).map(r => r.json() as PropModel[]),
    readAll: () => this.http.get('/').map(r => new Array<IssueModel>(r.json()).map(j => new IssueModel(j))),
    deleteById: (id) => this.http.delete(`/id=${id}`).map(r => new PropModel(r.json()))
  };
}

export class IssueModel {
  public id: number;
  public name: string;

  constructor(...args: any[]) {
    Object.assign(this, args);
  }
}
export class PropModel {
  public id: number;

  constructor(...args: any[]) {
    Object.assign(this, args);
  }
}
