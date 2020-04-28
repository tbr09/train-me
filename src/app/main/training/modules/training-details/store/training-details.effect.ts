import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";

import { TrainingClient } from "../../../../../services/api/api.service";

import {
  LoadTrainingDetails,
  LoadTrainingDetailsSuccess,
  LoadTrainingDetailsFail,
  TrainingDetailsActionTypes,
} from "./training-details.action";

@Injectable()
export class TrainingDetailsEffects {
  @Effect() loadTrainingDetails$: Observable<Action> = this.actions$.pipe(
    ofType(TrainingDetailsActionTypes.LoadTrainingDetails),
    switchMap((action: LoadTrainingDetails) => {
      const { trainingId } = action;
      return this.TrainingService.getTraining(trainingId).pipe(
        map((response) => new LoadTrainingDetailsSuccess(response)),
        catchError((error) => {
          return of(new LoadTrainingDetailsFail(error));
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private TrainingService: TrainingClient
  ) {}
}
