import {Injectable} from '@angular/core';
import {Floor} from '../types';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class FloorsService {

  private _floors: BehaviorSubject<Floor[]> = new BehaviorSubject<Floor[]>([]);

  constructor() {
    this.add(5);
  }

  get floors(): Observable<Floor[]> { return this._floors.asObservable(); }
  get floorsCount(): number { return this._floors.getValue().length; }
  get logs(): void { return console.log(this._floors.getValue()); }

  add(count: number) {
    let floors: Floor[] = this._floors.getValue();
    let floorCount: number = this.floorsCount;
    let i = 0;

    while (i < count) {
      floors.push({
        title: ++floorCount
      });
      i++;
    }

    this._floors.next(floors);
    this.logs;
  }

  delete(count: number) {
    let floors: Floor[] = this._floors.getValue();
    let result = floors.slice(0, floors.length - count);

    this._floors.next(result);
    this.logs;
  }

  methodsRouter(value: number) {
    let count = this.floorsCount;

    if (count > value) {
      this.delete(count - value);
    } else {
      this.add(value - count);
    }
  }
}
