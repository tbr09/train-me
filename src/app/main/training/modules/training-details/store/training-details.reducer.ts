import {
  TrainingDetailsActionTypes,
  TrainingDetailsActions,
} from "./training-details.action";
import { initialState, TrainingDetailsState } from "./training-details.state";
import { ActionReducerMap } from "@ngrx/store";

export function createTrainingDetailsReducer(
  state = initialState,
  action: TrainingDetailsActions
): TrainingDetailsState {
  switch (action.type) {
    case TrainingDetailsActionTypes.LoadTrainingDetails: {
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    }
    case TrainingDetailsActionTypes.LoadTrainingDetailsSuccess: {
      return {
        ...state,
        selectedTraining: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case TrainingDetailsActionTypes.LoadTrainingDetailsFail: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case TrainingDetailsActionTypes.AddExerciseToTraining: {
      return {
        ...state,
        isAsyncLoading: true,
        isError: null,
      };
    }
    case TrainingDetailsActionTypes.AddExerciseToTrainingSuccess: {
      return {
        ...state,
        selectedTraining: {
          ...state.selectedTraining,
          exercises: [...state.selectedTraining.exercises, action.response],
        },
        isAsyncLoading: false,
        isError: null,
      };
    }
    case TrainingDetailsActionTypes.AddExerciseToTrainingFail: {
      return {
        ...state,        
        isAsyncLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
}
