import { Action } from '@ngrx/store';
import { TrainingModel } from '../../../models/training.model';

export enum TrainingDetailsActionTypes {
  LoadTrainingDetails = '[TrainingDetails] LoadTrainingDetails',
  LoadTrainingDetailsSuccess = '[TrainingDetails] LoadTrainingDetailsSuccess',
  LoadTrainingDetailsFail = '[TrainingDetails] LoadTrainingDetailsFail',
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

export type TrainingDetailsActions =
  | LoadTrainingDetails
  | LoadTrainingDetailsSuccess
  | LoadTrainingDetailsFail;
