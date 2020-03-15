import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardModule
  ],
  exports: [ MainComponent ]
})
export class MainModule { }
