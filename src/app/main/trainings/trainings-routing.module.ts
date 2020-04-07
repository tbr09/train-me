import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TrainingsComponent } from './trainings.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingsRoutingModule { }
