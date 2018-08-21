import { Component } from '@angular/core';

export interface Rule {
  name: string,
  title: string,
  isActive?: boolean
}

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

  rules:Rule[] = [
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
    }
  ]

}
