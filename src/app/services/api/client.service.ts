import { getClients } from './../../main/clients/store/clients.selectors';
import { ClientModel } from './../../main/clients/models/client.model';
import { Observable, defer } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IClientService {
  getClients(): Observable<ClientModel[]>;
}

@Injectable({
  providedIn: 'root',
})
export class ClientClient implements IClientService {
    getClients(): Observable<ClientModel[]> {
    const returnValue = [
      {
        id: '1hr45hr4bfh35hrn',
        name: 'Will',
      } as ClientModel,
    ];
    return defer(() => Promise.resolve(returnValue));
  }
}
