import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Option} from "../types";
import {PassengersService} from "../passengers.service";
import {FloorsService} from "../floors.service";
import {ElevatorsService} from "../elevators.service";

// @ts-ignore
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit{
  
  private result = {
    liftsCount: 1,
    floorsCount: 5
  };
  
  @Output() floorsChanged: EventEmitter<any> = new EventEmitter();
  @Output() elevatorAdded: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private passengerService: PassengersService,
    private floorService: FloorsService,
    private elevatorService: ElevatorsService
  ) {}
  
  ngOnInit() {
    this.generateFloors(this.result.floorsCount);
    this.addElevator(this.result.liftsCount)
  }
  
  generateFloors(total: string | number): void {
    if(typeof total === 'string') total = parseFloat(total);
    
    this.floorService.generatefloors(total);
    this.floorsChanged.emit(null);
    console.log(this.floorService.getFloors());
  }
  
  addPassenger(): void {
    this.passengerService.addPassenger();
    
    console.log(this.passengerService.getPassengers());
  }
  
  addElevator(total: string | number): void {
    if(typeof total === 'string') total = parseFloat(total);
    
    this.elevatorService.addElevator();
    this.elevatorAdded.emit(null);
    console.log(this.elevatorService.getElevators());
  }
  
  router(field: string, count: string) {
    if (field === 'liftsCount') {
      this.addElevator(count);
    } else {
      this.generateFloors(count)
    }
  }

  options: Option[] = [
    {
      name: 'liftsCount',
      title: 'Количество лифтов'
    },
    {
      name: 'floorsCount',
      title: 'Количество этажей'
    }
  ];

}
