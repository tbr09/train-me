import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './dashboard.component';
import { dashboardStateName, initialState } from './store/state/dashboard.state';
import { DashboardEffects } from './store/effects/dashboard.effect';
import { createDashboardReducer } from './store';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(dashboardStateName, createDashboardReducer, {
      initialState,
    }),
    EffectsModule.forFeature([DashboardEffects]),
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
