import { Component, OnInit } from '@angular/core';

export interface Elevator {
  id: number,
  target: number,
  weight: number,
  maxWeight: number,
  status: string,
  direction: string,
  position: number
}

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})

export class ElevatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
