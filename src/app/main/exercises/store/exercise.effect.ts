import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";

import { ExerciseClient } from '../../../services/api/api.service';
import {
  ExerciseActionTypes,
  LoadExercisesSuccess,
  LoadExercisesFail
} from "./exercise.action";

@Injectable()
export class ExercisesEffects {
  @Effect() loadExercises$: Observable<Action> = this.actions$.pipe(
    ofType(ExerciseActionTypes.LoadExercises),
    switchMap(() => {
      return this.exerciseService.getExercises().pipe(
        map(response => new LoadExercisesSuccess(response)),
        catchError(error => {
          return of(new LoadExercisesFail(error));
        })
      );
    })
  );


  constructor(private actions$: Actions, private exerciseService: ExerciseClient) {}
}
