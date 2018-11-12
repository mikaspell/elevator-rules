import {Injectable} from "@angular/core";
import {Passenger} from "./types";

@Injectable()

export class PassengersService {
  
  public passengers: Passenger[] = [];
  
  addPassenger(): void {
    function numberGenerator(min:number, max:number): number{
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    let passenger: Passenger = {
      currentFloor: numberGenerator(1, 10),
      targetFloor: numberGenerator(1, 10),
      weight: numberGenerator(20, 120)
    };
    
    this.passengers.push(passenger);
  }
  
  deletePassenger(index:number): void {
    delete this.passengers[index];
  }
}
