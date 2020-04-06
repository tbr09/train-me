import { Action } from '@ngrx/store';
import { TrainingModel } from '../models/training.model';

export enum TrainingActionTypes {
  LoadTrainings = '[Training] LoadTrainings',
  LoadTrainingsSuccess = '[Training] LoadTrainingsSuccess',
  LoadTrainingsFail = '[Training] LoadTrainingsFail',
  AddTraining = '[Training] AddTraining'
}


export class AddTraining implements Action {
  readonly type = TrainingActionTypes.AddTraining;
  constructor(public payload: TrainingModel) {}
}

export class LoadTrainings implements Action {
  readonly type = TrainingActionTypes.LoadTrainings;
  constructor() {}
}

export class LoadTrainingsSuccess implements Action {
  readonly type = TrainingActionTypes.LoadTrainingsSuccess;
  constructor(public payload: TrainingModel[]) {}
}

export class LoadTrainingsFail implements Action {
  readonly type = TrainingActionTypes.LoadTrainingsFail;
  constructor(public error: any) {}
}

export type TrainingActions =
  | LoadTrainings
  | LoadTrainingsSuccess
  | LoadTrainingsFail
  | AddTraining;
