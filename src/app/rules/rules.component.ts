import { Component } from '@angular/core';
import {Rule} from '../types';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})

export class RulesComponent  {
  result: object = {
    weight: true,
    distance: true
  };

  rules: Rule[] = [
    {
      name: 'weight',
      title: 'Учитывать вес пассажиров'
    },
    {
      name: 'direction',
      title: 'Учитывать направление лифта'
    },
    {
      name: 'distance',
      title: 'Учитывать расстояние до необходимого этажа'
    },
    {
      name: 'time',
      title: 'Учитывать период дня'
    }
  ];

}
