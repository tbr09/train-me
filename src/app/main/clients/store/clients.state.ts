import { ClientModel } from '../models/client.model';

export const clientStateName = 'ClientStateName';

export interface ClientState {
  clients: ClientModel[];
  isLoading: boolean;
  isAsyncLoading: boolean;
  isError: boolean;
}

export const initialState: ClientState = {
  clients: [
    {
      id: 'someguid',
      name: 'klient 1',
    } as ClientModel,
    {
      id: 'someguid',
      name: 'klient 2',
    } as ClientModel,
  ],
  isLoading: true,
  isAsyncLoading: false,
  isError: null,
};
