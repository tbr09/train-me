import { TrainingsModule } from "./trainings/trainings.module";
import { MainRoutingModule } from "./main-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardModule } from "./dashboard/dashboard.module";
import { MainComponent } from "./main.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardModule,
    TrainingsModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    HttpClientModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
