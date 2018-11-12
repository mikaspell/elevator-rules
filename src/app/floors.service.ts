import {Injectable} from "@angular/core";
import {Floor} from "./types";

@Injectable()

export class FloorsService {
  
  public floors: Floor[];
  
  generatefloors(count:number): void {
    this.floors = new Array(count);
    
    for(let i=0; i<this.floors.length; i++) {
      this.floors[i] = {
        title: count - i
      };
    }
  }
  
  addFloor():void {
    
    this.floors.push({title: this.floors.length + 1});
  }
}
