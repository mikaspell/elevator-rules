import {Component, OnDestroy, OnInit} from '@angular/core';
import {Option} from '../types';
import {PassengersService} from '../services/passengers.service';
import {FloorsService} from '../services/floors.service';
import {ElevatorsService} from '../services/elevators.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  public fields: Option[] = [
    {
      name: 'elevators',
      title: 'Количество лифтов',
      options: [1, 2, 3, 4, 5]
    },
    {
      name: 'floors',
      title: 'Количество этажей',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ];
  public configuration: FormGroup;

  constructor(
    private passengerService: PassengersService,
    private floorService: FloorsService,
    private elevatorService: ElevatorsService,
    private fb: FormBuilder
  ) {
    this.configuration = this.fb.group({
      elevators: this.fb.control(1),
      floors: this.fb.control(5)
    });

    let elevatorsChanges = this.configuration.get('elevators').valueChanges
      .subscribe(value => {
        this.elevatorService.methodsRouter(value);
      });
    let floorsChanges = this.configuration.get('floors').valueChanges
      .subscribe(value => {
        this.floorService.methodsRouter(value);
      });

    this._subscriptions.add(elevatorsChanges).add(floorsChanges);
  }

  ngOnInit() {}

  addPassenger(): void {
    this.passengerService.addPassenger();

    console.log(this.passengerService.getPassengers());
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
