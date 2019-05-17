import {Component, OnDestroy} from '@angular/core';
import {FloorsService} from './services/floors.service';
import {Elevator, Floor} from './types';
import {ElevatorsService} from './services/elevators.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  h1 = 'Elevator Rules';

  public floors: Floor[];
  public elevators: Elevator[];

  private _subscriptions: Subscription = new Subscription();

  constructor(
    private floorsService: FloorsService,
    private elevatorsService: ElevatorsService
  ) {
    let floorsChanges = this.floorsService.floors.subscribe(floors => this.floors = [...floor]);
    let elChanges = this.elevatorsService.elevators.subscribe(els => this.elevators = [...els]);
    this._subscriptions.add(floorsChanges).add(elChanges);
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
