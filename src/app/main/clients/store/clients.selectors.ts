import { ClientModel } from "../models/Client.model";
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";

import { ClientState, clientStateName } from "./clients.state";

export const getFeatureState: MemoizedSelector<
  object,
  ClientState
> = createFeatureSelector<ClientState>(clientStateName);

export const getClientsState = (state: ClientState) => state.clients;

export const getIsLoadingState = (state: ClientState) => state.isLoading;

export const getIsAsyncLoadingState = (state: ClientState) => state.isAsyncLoading;

export const getIsErrorState = (state: ClientState) => state.isError;

export const getClients: MemoizedSelector<
  ClientState,
  ClientModel[]
> = createSelector(getFeatureState, getClientsState);

export const getIsLoading: MemoizedSelector<
  ClientState,
  boolean
> = createSelector(getFeatureState, getIsLoadingState);

export const getIsAsyncLoading: MemoizedSelector<
  ClientState,
  boolean
> = createSelector(getFeatureState, getIsLoadingState);

export const getIsError: MemoizedSelector<
  ClientState,
  boolean
> = createSelector(getFeatureState, getIsErrorState);
