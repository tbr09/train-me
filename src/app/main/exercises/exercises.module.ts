import { EffectsModule } from '@ngrx/effects';
import { ExercisesEffects } from './store/effects/exercise.effect';
import { StoreModule } from '@ngrx/store';
import { exerciseStateName, initialState } from './store/state/exercise.state';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';

import { MatListModule } from '@angular/material/list';
import { createExerciseReducer } from './store';

@NgModule({
  declarations: [ExercisesComponent],
  imports: [
    CommonModule,
    MatListModule,
    ExercisesRoutingModule,
    StoreModule.forFeature(exerciseStateName, createExerciseReducer, {
      initialState,
    }),
    EffectsModule.forFeature([ExercisesEffects]),
  ]
})
export class ExercisesModule { }
