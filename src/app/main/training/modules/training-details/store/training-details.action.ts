import { Action } from '@ngrx/store';
import { TrainingModel } from '../../../models/training.model';
import { TrainingExerciseModel } from '../../../models/training-exercise.model';

export enum TrainingDetailsActionTypes {
  LoadTrainingDetails = '[TrainingDetails] LoadTrainingDetails',
  LoadTrainingDetailsSuccess = '[TrainingDetails] LoadTrainingDetailsSuccess',
  LoadTrainingDetailsFail = '[TrainingDetails] LoadTrainingDetailsFail',
  AddExerciseToTraining = '[TrainingDetails] AddExerciseToTraining',
  AddExerciseToTrainingSuccess = '[TrainingDetails] AddExerciseToTrainingSuccess',
  AddExerciseToTrainingFail = '[TrainingDetails] AddExerciseToTrainingFail',
}

export class LoadTrainingDetails implements Action {
  readonly type = TrainingDetailsActionTypes.LoadTrainingDetails;
  constructor(public trainingId: number) {}
}

export class LoadTrainingDetailsSuccess implements Action {
  readonly type = TrainingDetailsActionTypes.LoadTrainingDetailsSuccess;
  constructor(public payload: TrainingModel) {}
}

export class LoadTrainingDetailsFail implements Action {
  readonly type = TrainingDetailsActionTypes.LoadTrainingDetailsFail;
  constructor(public error: any) {}
}

export class AddExerciseToTraining implements Action {
  readonly type = TrainingDetailsActionTypes.AddExerciseToTraining;
  constructor(public trainingId: number, public exerciseId: number, public repetitions: number[]) {}
}

export class AddExerciseToTrainingSuccess implements Action {
  readonly type = TrainingDetailsActionTypes.AddExerciseToTrainingSuccess;
  constructor(public response: TrainingExerciseModel) {}
}

export class AddExerciseToTrainingFail implements Action {
  readonly type = TrainingDetailsActionTypes.AddExerciseToTrainingFail;
  constructor(public error: any) {}
}

export type TrainingDetailsActions =
  | LoadTrainingDetails
  | LoadTrainingDetailsSuccess
  | LoadTrainingDetailsFail
  | AddExerciseToTraining
  | AddExerciseToTrainingSuccess
  | AddExerciseToTrainingFail;
