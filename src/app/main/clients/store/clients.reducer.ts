import { ClientActionTypes, ClientActions } from './clients.action';
import { initialState, ClientState } from './clients.state';
import { ActionReducerMap } from '@ngrx/store';

export function createClientReducer(
  state = initialState,
  action: ClientActions
): ClientState {
  switch (action.type) {
    case ClientActionTypes.LoadClients: {
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    }
    case ClientActionTypes.LoadClientsSuccess: {
      return {
        ...state,
        clients: action.payload,
        isLoading: false,
        isError: null,
      };
    }
    case ClientActionTypes.LoadClientsFail: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ClientActionTypes.AddClient: {
      return {
        ...state,
        clients: [...state.clients, action.payload],
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
}
