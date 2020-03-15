import { BasicUserProfileModel } from '../../models/userprofile.model';
import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector,
  } from '@ngrx/store';
  
  import { DashboardState, dashboardStateName } from '../state/dashboard.state';

  export const getFeatureState: MemoizedSelector<
    object,
    DashboardState
  > = createFeatureSelector<DashboardState>(dashboardStateName);
  
  export const getProfileState = (state: DashboardState) => state.profile;
  
  export const getIsLoadingState = (state: DashboardState) => state.isLoading;
  
  export const getIsErrorState = (state: DashboardState) => state.isError;
  
  export const getProfile: MemoizedSelector<
    DashboardState,
    BasicUserProfileModel
  > = createSelector(getFeatureState, getProfileState);
  
  export const getIsLoading: MemoizedSelector<
    DashboardState,
    boolean
  > = createSelector(getFeatureState, getIsLoadingState);
  
  export const getIsError: MemoizedSelector<
    DashboardState,
    boolean
  > = createSelector(getFeatureState, getIsErrorState);
  