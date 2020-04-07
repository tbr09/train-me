import { TrainingsRoutingModule } from './trainings-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TrainingsEffects } from './store/trainings.effect';
import { EffectsModule } from '@ngrx/effects';
import { trainingStateName, initialState } from './store/trainings.state';
import { StoreModule } from '@ngrx/store';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings.component';
import { createTrainingReducer } from './store';

@NgModule({
  declarations: [TrainingsComponent],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    StoreModule.forFeature(trainingStateName, createTrainingReducer, {
      initialState
    }),
    EffectsModule.forFeature([TrainingsEffects]),
    MatTableModule,
    MatProgressSpinnerModule,
  ]
})
export class TrainingsModule { }
