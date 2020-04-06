import { Action } from '@ngrx/store';
import { ExerciseModel } from '../models/exercise.model';

export enum ExerciseActionTypes {
  LoadExercises = '[Exercise] LoadExercises',
  LoadExercisesSuccess = '[Exercise] LoadExercisesSuccess',
  LoadExercisesFail = '[Exercise] LoadExercisesFail',
  AddExercise = '[Exercise] AddExercise',
}

export class AddExercise implements Action {
  readonly type = ExerciseActionTypes.AddExercise;
  constructor(public payload: ExerciseModel) {}
}

export class LoadExercises implements Action {
  readonly type = ExerciseActionTypes.LoadExercises;
  constructor() {}
}

export class LoadExercisesSuccess implements Action {
  readonly type = ExerciseActionTypes.LoadExercisesSuccess;
  constructor(public payload: ExerciseModel[]) {}
}

export class LoadExercisesFail implements Action {
  readonly type = ExerciseActionTypes.LoadExercisesFail;
  constructor(public error: any) {}
}

export type ExerciseActions =
  | LoadExercises
  | LoadExercisesSuccess
  | LoadExercisesFail
  | AddExercise;
