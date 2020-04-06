import {
  ExerciseActionTypes,
  ExerciseActions,
} from "./exercise.action";
import { initialState, ExerciseState } from "./exercise.state";
import { ActionReducerMap } from "@ngrx/store";

export function createExerciseReducer(
  state = initialState,
  action: ExerciseActions
): ExerciseState {
  console.log(action);

  switch (action.type) {
    case ExerciseActionTypes.LoadExercises: {
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    }
    case ExerciseActionTypes.LoadExercisesSuccess: {
      return {
        ...state,
        exercises: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case ExerciseActionTypes.LoadExercisesFail: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ExerciseActionTypes.AddExercise: {
      return {
        exercises: [...state.exercises, action.payload],
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
}
