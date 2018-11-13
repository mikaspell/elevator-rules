import {Injectable} from "@angular/core";
import {Elevator} from "./types";

@Injectable()

export class ElevatorsService {
  
  private elevators: Elevator[] = [];
  
  getElevators(): Elevator[] {
    return this.elevators;
  }
  
  addElevator(): void {
    this.elevators.push({
      id: this.elevators.length + 1,
      target: null,
      weight: 0,
      maxWeight: 680,
      status: 'waiting',
      direction: null,
      position: 1
    })
  }
}
