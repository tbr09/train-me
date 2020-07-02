import { ClientsComponent } from './clients.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: 'list',
        component: ClientListComponent,
      },
      {
        path: 'details/:id',
        component: ClientDetailsComponent,
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
