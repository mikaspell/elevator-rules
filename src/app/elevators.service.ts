import {Injectable} from '@angular/core';
import {Elevator} from './types';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ElevatorsService {

  private _elevators: BehaviorSubject<Elevator[]> = new BehaviorSubject<Elevator[]>([]);

  constructor() {
    this.addElevator(1);
  }

  get elevators() { return this._elevators.asObservable(); }
  get elevatorsCount() { return this._elevators.getValue().length; }
  get logs() { return console.log(this._elevators.getValue()); }

  addElevator(count: number): void {
    let elevatorsArray: Elevator[] = this._elevators.getValue();
    let elevatorsArrayLength: number = this.elevatorsCount;
    let i = 0;

    while (i < count) {
      elevatorsArray.push({
        id: ++elevatorsArrayLength,
        target: null,
        weight: 0,
        maxWeight: 680,
        status: 'waiting',
        direction: null,
        position: 1
      });
      i++;
    }

    this._elevators.next(elevatorsArray);
    this.logs;
  }

  deleteElevator(count: number): void {
    let elevatorsArray: Elevator[] = this._elevators.getValue();
    let result = elevatorsArray.slice(0, elevatorsArray.length - count);

    this._elevators.next(result);
    this.logs;
  }

  methodsRouter(value) {
    let count = this.elevatorsCount;

    if (count > value) {
      this.deleteElevator(count - value);
    } else {
      this.addElevator(value - count);
    }
  }
}
