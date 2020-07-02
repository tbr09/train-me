import { ClientState } from './../../store/clients.state';
import { Component, OnInit } from '@angular/core';
import { ClientActionTypes } from '../../store/clients.action';
import { Observable } from 'rxjs';
import { ClientModel } from '../../models/Client.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { getClients, getIsAsyncLoading, getIsLoading } from '../../store';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients$: Observable<ClientModel[]>;
  filteredClients$: Observable<ClientModel[]>;

  isLoading$: Observable<boolean>;
  isAsyncLoading$: Observable<boolean>;

  // addClientDialogRef: MatDialogRef<AddClientModalComponent>;

  displayedColumns: string[] = [
    'id',
    'name',
    'operations',
  ];

  constructor(
    private ClientStore: Store<ClientState>,
    private router: Router
    // private dialog: MatDialog
  ) {
    this.clients$ = this.ClientStore.select(getClients).pipe(delay(2000));
    this.isLoading$ = this.ClientStore.select(getIsAsyncLoading);
    this.isLoading$ = this.ClientStore.select(getIsLoading);

    this.ClientStore.dispatch({ type: ClientActionTypes.LoadClients });
  }

  openAddClientFormDialog() {
    // this.inviteClientDialogRef = this.dialog.open(
    //   InviteClientModalComponent,
    //   {
    //     width: '40%',
    //     data: { name: 'example name passed to modal form' },
    //     disableClose: true,
    //     autoFocus: true,
    //   }
    // );

    // this.inviteClientDialogRef
    //   .afterClosed()
    //   .subscribe((result) => this.handleInviteClientForm(result));
  }

  handleAddClientForm(result) {
    if (result !== undefined) {
     
    }
  }

  ngOnInit(): void {}

  openClientDetails(ClientId: number) {}

  openEditClientModal(ClientId: number) {}

  deleteClient(ClientId: number) {}

  navigateToClient(row: any) {
    this.router.navigate(['/Client/details/' + row.id]);
  }

}
