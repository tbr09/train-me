import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";

import { TrainingClient } from '../../../../services/api/api.service';

import {
  TrainingActionTypes,
  LoadTrainingsSuccess,
  LoadTrainingsFail
} from "./trainings.action";

@Injectable()
export class TrainingsEffects {
  @Effect() loadTrainings$: Observable<Action> = this.actions$.pipe(
    ofType(TrainingActionTypes.LoadTrainings),
    switchMap(() => {
      return this.TrainingService.getTrainings().pipe(
        map(response => new LoadTrainingsSuccess(response)),
        catchError(error => {
          return of(new LoadTrainingsFail(error));
        })
      );
    })
  );


  constructor(private actions$: Actions, private TrainingService: TrainingClient) {}
}
