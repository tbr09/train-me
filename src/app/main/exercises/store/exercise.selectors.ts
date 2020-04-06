import { ExerciseModel } from "../models/exercise.model";
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";

import { ExerciseState, exerciseStateName } from "./exercise.state";

export const getFeatureState: MemoizedSelector<
  object,
  ExerciseState
> = createFeatureSelector<ExerciseState>(exerciseStateName);

export const getExercisesState = (state: ExerciseState) => state.exercises;

export const getIsLoadingState = (state: ExerciseState) => state.isLoading;

export const getIsErrorState = (state: ExerciseState) => state.isError;

export const getExercises: MemoizedSelector<
  ExerciseState,
  ExerciseModel[]
> = createSelector(getFeatureState, getExercisesState);

export const getIsLoading: MemoizedSelector<
  ExerciseState,
  boolean
> = createSelector(getFeatureState, getIsLoadingState);

export const getIsError: MemoizedSelector<
  ExerciseState,
  boolean
> = createSelector(getFeatureState, getIsErrorState);
