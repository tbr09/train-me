import { ExercisesModule } from './exercises/exercises.module';
import { TrainingModule } from "./training/training.module";
import { MainRoutingModule } from "./main-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardModule } from "./dashboard/dashboard.module";
import { MainComponent } from "./main.component";
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardModule,
    ExercisesModule,
    TrainingModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  exports: [MainComponent],
})
export class MainModule {}
