import {
  DashboardActionTypes,
  DashboardActions
} from "../actions/dashboard.action";
import { initialState, DashboardState } from "../state/dashboard.state";
import { ActionReducerMap } from "@ngrx/store";

export function createDashboardReducer(
  state = initialState, 
  action: DashboardActions
): DashboardState {
  console.log(action);

  switch (action.type) {
    case DashboardActionTypes.LoadUser: {
      return {
        ...state,
        isLoading: true,
        isError: null
      };
    }
    case DashboardActionTypes.LoadUserSuccess: {
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        isError: null
      };
    }
    case DashboardActionTypes.LoadUserFail: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    default:
      return state;
  }
}
