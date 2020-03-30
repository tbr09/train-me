import { MatButtonModule } from "@angular/material/button";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExercisesRoutingModule } from "./exercises-routing.module";
import { ExercisesEffects } from "./store/effects/exercise.effect";
import { exerciseStateName, initialState } from "./store/state/exercise.state";
import { ExercisesComponent } from "./exercises.component";
import { createExerciseReducer } from "./store";
import { AddExerciseModalComponent } from "./components/add-exercise-modal/add-exercise-modal.component";

import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [ExercisesComponent, AddExerciseModalComponent],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    StoreModule.forFeature(exerciseStateName, createExerciseReducer, {
      initialState
    }),
    EffectsModule.forFeature([ExercisesEffects]),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class ExercisesModule {}
