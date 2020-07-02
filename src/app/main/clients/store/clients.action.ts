import { Action } from '@ngrx/store';
import { ClientModel } from '../models/Client.model';

export enum ClientActionTypes {
  LoadClients = '[Client] LoadClients',
  LoadClientsSuccess = '[Client] LoadClientsSuccess',
  LoadClientsFail = '[Client] LoadClientsFail',
  AddClient = '[Client] AddClient'
}


export class AddClient implements Action {
  readonly type = ClientActionTypes.AddClient;
  constructor(public payload: ClientModel) {}
}

export class LoadClients implements Action {
  readonly type = ClientActionTypes.LoadClients;
  constructor() {}
}

export class LoadClientsSuccess implements Action {
  readonly type = ClientActionTypes.LoadClientsSuccess;
  constructor(public payload: ClientModel[]) {}
}

export class LoadClientsFail implements Action {
  readonly type = ClientActionTypes.LoadClientsFail;
  constructor(public error: any) {}
}

export type ClientActions =
  | LoadClients
  | LoadClientsSuccess
  | LoadClientsFail
  | AddClient;
