import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

export interface IActionable<T> extends IDataAccess<T, void> {
    readonly _subject: BehaviorSubject<T | T[]>;
    getState: () => BehaviorSubject<T | T[]>;
    clear: () => void;
}

export interface IDataAccess<T, U> {
    read: (id: number) => U;
    readList: (list: T[]) => U;
    readAll: () => U;
    create: (model: T) => U;
    deleteById: (id: number) => U;
}


export abstract class BaseService<T> implements IActionable<T> {
    readonly _subject: BehaviorSubject<T | T[]> = BehaviorSubject.create();

    constructor(private dataAccess: IDataAccess<T, Observable<T | T[]>>) { }

    getState() {
        return this._subject;
    }

    clear() {
        this._subject.next(undefined);
    }

    read(id: number) {
        this.dataAccess.read(id).subscribe(this._subject.next);
    }

    readList(list: T[] = []) {
        this.dataAccess.readList(list).subscribe(this._subject.next);
    }

    readAll() {
        this.dataAccess.readAll().subscribe(this._subject.next);
    }

    create(model: T) {
        this.dataAccess.create(model).subscribe(this._subject.next);
    }

    deleteById(id: number) {
        this.dataAccess.deleteById(id).subscribe(this._subject.next);
    }
}
