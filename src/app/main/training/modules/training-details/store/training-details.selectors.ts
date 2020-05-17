import { TrainingModel } from "../../../models/training.model";
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from "@ngrx/store";

import {
  TrainingDetailsState,
  trainingDetailsStateName,
} from "./training-details.state";

export const getFeatureState: MemoizedSelector<
  object,
  TrainingDetailsState
> = createFeatureSelector<TrainingDetailsState>(trainingDetailsStateName);

export const getTrainingDetailsState = (state: TrainingDetailsState) =>
  state.selectedTraining;

export const getIsLoadingState = (state: TrainingDetailsState) =>
  state.isLoading;

export const getIsAsyncLoadingState = (state: TrainingDetailsState) =>
  state.isAsyncLoading;

export const getIsErrorState = (state: TrainingDetailsState) => state.isError;

export const getTrainingDetails: MemoizedSelector<
  TrainingDetailsState,
  TrainingModel
> = createSelector(getFeatureState, getTrainingDetailsState);

export const getIsLoading: MemoizedSelector<
  TrainingDetailsState,
  boolean
> = createSelector(getFeatureState, getIsLoadingState);

export const getIsAsyncLoading: MemoizedSelector<
  TrainingDetailsState,
  boolean
> = createSelector(getFeatureState, getIsAsyncLoadingState);

export const getIsError: MemoizedSelector<
  TrainingDetailsState,
  boolean
> = createSelector(getFeatureState, getIsErrorState);
