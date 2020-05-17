import {
  DashboardActionTypes,
  DashboardActions
} from "./dashboard.action";
import { initialState, DashboardState } from "./dashboard.state";
import { ActionReducerMap } from "@ngrx/store";

export function createDashboardReducer(
  state = initialState, 
  action: DashboardActions
): DashboardState {
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
