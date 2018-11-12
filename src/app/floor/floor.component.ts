import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent {

  constructor() { }
  
  @Input() number: number;

}
