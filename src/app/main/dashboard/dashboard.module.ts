import { DashboardEffects } from './store/effects/dashboard.effect';
import { dashboardStateName, initialState } from './store/state/dashboard.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import { createDashboardReducer } from './store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(dashboardStateName, createDashboardReducer, {
      initialState,
    }),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
