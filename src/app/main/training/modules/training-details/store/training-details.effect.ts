import { NotificationService } from './../../../../../services/notification.service';
import { HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";

import { TrainingClient } from "../../../../../services/api/api.service";

import {
  LoadTrainingDetails,
  LoadTrainingDetailsSuccess,
  LoadTrainingDetailsFail,
  TrainingDetailsActionTypes,
  AddExerciseToTrainingSuccess,
  AddExerciseToTrainingFail,
  AddExerciseToTraining,
} from "./training-details.action";
import { TrainingDetailsState } from ".";
import { TrainingExerciseModel } from "../../../models/training-exercise.model";

@Injectable()
export class TrainingDetailsEffects {
  @Effect() loadTrainingDetails$: Observable<Action> = this.actions$.pipe(
    ofType(TrainingDetailsActionTypes.LoadTrainingDetails),
    switchMap((action: LoadTrainingDetails) => {
      const { trainingId } = action;
      return this.trainingService.getTraining(trainingId).pipe(
        map((response) => new LoadTrainingDetailsSuccess(response)),
        catchError((error) => {
          return of(new LoadTrainingDetailsFail(error));
        })
      );
    })
  );

  @Effect() addExerciseToTraining$: Observable<Action> = this.actions$.pipe(
    ofType(TrainingDetailsActionTypes.AddExerciseToTraining),
    switchMap((action: AddExerciseToTraining) => {
      const { trainingId, exerciseId, repetitions } = action;
      return this.trainingService
        .addExercise(trainingId, exerciseId, repetitions)
        .pipe(
          map(
            (response: TrainingExerciseModel) =>
              new AddExerciseToTrainingSuccess(response)
          ),
          catchError((error) => {
            return of(new AddExerciseToTrainingFail(error));
          })
        );
    })
  );

  @Effect() addExerciseToTrainingSuccess$: Observable<
    void
  > = this.actions$.pipe(
    ofType(TrainingDetailsActionTypes.AddExerciseToTrainingSuccess),
    map(() =>
      this.notificationService.sendNotification(
        "Exercise successfully added to training!"
      )
    )
  );

  constructor(
    private actions$: Actions,
    private trainingService: TrainingClient,
    private trainingDetailsStore: Store<TrainingDetailsState>,
    private notificationService: NotificationService
  ) {}
}
