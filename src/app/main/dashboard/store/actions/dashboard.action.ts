import { Action } from '@ngrx/store';
import { BasicUserProfileModel } from '../../models/userprofile.model';

export enum DashboardActionTypes {
  LoadUser = '[UserProfile] LoadUser',
  LoadUserSuccess = '[UserProfile] LoadUserSuccess',
  LoadUserFail = '[UserProfile] LoadUserFail',
}

export class LoadUser implements Action {
  readonly type = DashboardActionTypes.LoadUser;
  constructor() {}
}

export class LoadUserSuccess implements Action {
  readonly type = DashboardActionTypes.LoadUserSuccess;
  constructor(public payload: BasicUserProfileModel) {}
}

export class LoadUserFail implements Action {
  readonly type = DashboardActionTypes.LoadUserFail;
  constructor(public error: any) {}
}

export type DashboardActions =
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail;
