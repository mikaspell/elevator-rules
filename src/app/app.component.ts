import {Component, OnInit} from '@angular/core';
import {FloorsService} from "./floors.service";
import {Elevator, Floor} from "./types";
import {ElevatorsService} from "./elevators.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  h1 = 'Elevator Rules';
  
  public floors: Floor[] = [];
  public elevators: Elevator[] = [];
  
  constructor(private floorsService: FloorsService, private elevatorsService: ElevatorsService) {}
  
  onElevatorsCountChanged(): void {
    this.elevators = this.elevatorsService.getElevators();
  }

  onFloorsChanged(): void {
    this.floors = this.floorsService.getFloors();
  }
}
