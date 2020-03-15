import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule
  ],
  exports: [ MainComponent ]
})
export class MainModule { }
