import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import {SettingsComponent} from './settings/settings.component';

import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ElevatorComponent } from './elevator/elevator.component';
import { FloorComponent } from './floor/floor.component';
import { PassangeerComponent } from './passangeer/passangeer.component';
import { ProcessorComponent } from './processor/processor.component';
import {PassengersService} from './services/passengers.service';
import {FloorsService} from './services/floors.service';
import {ElevatorsService} from './services/elevators.service';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    SettingsComponent,
    ElevatorComponent,
    FloorComponent,
    PassangeerComponent,
    ProcessorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [PassengersService, FloorsService, ElevatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
