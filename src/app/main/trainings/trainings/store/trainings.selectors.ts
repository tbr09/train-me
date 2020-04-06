import { TrainingModel } from "../models/training.model";
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";

import { TrainingState, trainingStateName } from "./trainings.state";

export const getFeatureState: MemoizedSelector<
  object,
  TrainingState
> = createFeatureSelector<TrainingState>(trainingStateName);

export const getTrainingsState = (state: TrainingState) => state.trainings;

export const getIsLoadingState = (state: TrainingState) => state.isLoading;

export const getIsErrorState = (state: TrainingState) => state.isError;

export const getTrainings: MemoizedSelector<
  TrainingState,
  TrainingModel[]
> = createSelector(getFeatureState, getTrainingsState);

export const getIsLoading: MemoizedSelector<
  TrainingState,
  boolean
> = createSelector(getFeatureState, getIsLoadingState);

export const getIsError: MemoizedSelector<
  TrainingState,
  boolean
> = createSelector(getFeatureState, getIsErrorState);
