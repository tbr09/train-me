import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './dashboard.component';
import { dashboardStateName, initialState } from './store/dashboard.state';
import { DashboardEffects } from './store/dashboard.effect';
import { createDashboardReducer } from './store';
import { TextAreaModule } from '../../shared/components/text-area/text-area.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(dashboardStateName, createDashboardReducer, {
      initialState,
    }),
    EffectsModule.forFeature([DashboardEffects]),
    DashboardRoutingModule,
    ReactiveFormsModule,
    TextAreaModule
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
