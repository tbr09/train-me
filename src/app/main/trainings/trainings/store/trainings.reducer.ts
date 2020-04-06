import {
  TrainingActionTypes,
  TrainingActions,
} from "./trainings.action";
import { initialState, TrainingState } from "./trainings.state";
import { ActionReducerMap } from "@ngrx/store";

export function createTrainingReducer(
  state = initialState,
  action: TrainingActions
): TrainingState {
  console.log(action);

  switch (action.type) {
    case TrainingActionTypes.LoadTrainings: {
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    }
    case TrainingActionTypes.LoadTrainingsSuccess: {
      return {
        ...state,
        trainings: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case TrainingActionTypes.LoadTrainingsFail: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case TrainingActionTypes.AddTraining: {
      return {
        trainings: [...state.trainings, action.payload],
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
}
