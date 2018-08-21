import { Component, OnInit } from '@angular/core';

export interface Passanger {
  weight: number,
  position: number,
  target: number
}

@Component({
  selector: 'app-passangeer',
  templateUrl: './passangeer.component.html',
  styleUrls: ['./passangeer.component.scss']
})
export class PassangeerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
