import { Component, OnInit } from '@angular/core';

export interface Floor {
  lvl: number,
  status: string,
  direction: string
}

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
