import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
