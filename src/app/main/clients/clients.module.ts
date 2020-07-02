import { MatButtonModule } from '@angular/material/button';
import { ClientsEffects } from './store/clients.effect';
import { trainingStateName } from './../training/store/trainings.state';
import { ClientsComponent } from './clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { StoreModule } from '@ngrx/store';
import { createClientReducer, clientStateName, initialState } from './store';
import { EffectsModule } from '@ngrx/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ClientDetailsComponent, ClientListComponent, ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    StoreModule.forFeature(clientStateName, createClientReducer, {
      initialState,
    }),
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    EffectsModule.forFeature([ClientsEffects]),
  ],
})
export class ClientsModule {}
