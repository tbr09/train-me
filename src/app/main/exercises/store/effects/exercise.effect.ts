import { ExerciseClient } from './../../../../services/api/api.service';
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import {
  ExerciseActionTypes,
  LoadExercisesSuccess,
  LoadExercisesFail
} from "../actions/exercise.action";
import { UserClient } from "src/app/services/api/api.service";

@Injectable()
export class DashboardEffects {
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
