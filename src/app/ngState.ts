import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

export interface IActionable<T> {
    readonly state: BehaviorSubject<T | T[]>;
    clear: () => void;
}

export interface IDataAccess<T, U> {
    read: (id: number) => U;
    readList: (list: T[]) => U;
    readAll: () => U;
    create: (model: T) => U;
    deleteById: (id: number) => U;
}

export abstract class BaseService<T> implements IActionable<T>, IDataAccess<T, void> {
    readonly state: BehaviorSubject<T | T[]> = BehaviorSubject.create();

    constructor(private dataAccess: IDataAccess<T, Observable<T | T[]>>) { }

    clear() {
        this.state.next(undefined);
    }

    read(id: number) {
        this.dataAccess.read(id).subscribe(this.state.next);
    }

    readList(list: T[] = []) {
        this.dataAccess.readList(list).subscribe(this.state.next);
    }

    readAll() {
        this.dataAccess.readAll().subscribe(this.state.next);
    }

    create(model: T) {
        this.dataAccess.create(model).subscribe(this.state.next);
    }

    deleteById(id: number) {
        this.dataAccess.deleteById(id).subscribe(this.state.next);
    }
}

class FormConstructorState<T> implements IActionable<T> {
    state: BehaviorSubject<T>;
    clear: () => void;

    setState(val: T) {
        this.state.next(val);
    }

}

export abstract class FormConstructor<T> {
    private formState: FormConstructorState<T> = new FormConstructorState<T>();

    get model() {
        return this.formState.state.getValue();
    }

    set model(val: T) {
        this.formState.setState(val);
    }

    constructor(private dataAccess: IDataAccess<T, Observable<T | T[]>>) { }

}
