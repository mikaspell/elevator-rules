import {Injectable} from '@angular/core';
import {Passenger} from '../types';
import {FloorsService} from './floors.service';
import {BehaviorSubject, Observable} from 'rxjs';

function numberGenerator(min: number, max: number, exception?: number): number {
  let number = Math.floor(Math.random() * (max - min)) + min;

  if (exception && number === exception) {
    return numberGenerator(min, max, exception);
  } else {
    return number;
  }
}

@Injectable()

export class PassengersService {

  private _passengers: BehaviorSubject<Passenger[]> = new BehaviorSubject<Passenger[]>([]);

  constructor(
    private flService: FloorsService
  ) {}

  get passengers(): Observable<Passenger[]> { return this._passengers.asObservable(); }
  get logs() { return console.log(this._passengers.getValue()); }

  add(): void {
    let lastFloor = this.flService.floorsCount;
    let currentFloor = numberGenerator(1, lastFloor + 1);
    let passenger: Passenger = {
      currentFloor: currentFloor,
      targetFloor: numberGenerator(1, lastFloor + 1, currentFloor),
      weight: numberGenerator(20, 120)
    };
    let passengers = this._passengers.getValue();

    passengers.push(passenger);
    this._passengers.next(passengers);
    this.logs;
  }

  delete(index: number): void {
    let passengers = this._passengers.getValue();
    passengers.splice(index, 1);

    this._passengers.next(passengers);
    this.logs;
  }
}
