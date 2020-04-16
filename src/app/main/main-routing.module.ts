import { TrainingDetailsComponent } from './trainings/components/training-details/training-details.component';
import { TrainingsModule } from './trainings/trainings.module';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
     
      {
        path: 'exercise',
        loadChildren: () =>
          import('./exercises/exercises.module').then(
            m => m.ExercisesModule
          ),
      },
      {
        path: 'training/:id',
        component: TrainingDetailsComponent
      },
      {
        path: 'training',
        loadChildren: () =>
          import('./trainings/trainings.module').then(
            m => m.TrainingsModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
      },
    ],
  }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
