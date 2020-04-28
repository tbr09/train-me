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
  console.log(action);

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
    default:
      return state;
  }
}
