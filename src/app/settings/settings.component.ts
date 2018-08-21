import {Component} from "@angular/core";

export interface Option {
  name: string,
  title: string
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent {

  result:object = {
    liftsCount: 1,
    floorsCount: 10
  };

  options: Option[] = [
    {
      name: 'liftsCount',
      title: 'Количество лифтов'
    },
    {
      name: 'floorsCount',
      title: 'Количество этажей'
    }
  ]
}
