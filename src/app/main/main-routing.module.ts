import { MainComponent } from "./main.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "exercise",
        loadChildren: () =>
          import("./exercises/exercises.module").then((m) => m.ExercisesModule),
      },
      {
        path: "training",
        loadChildren: () =>
          import("./training/training.module").then((m) => m.TrainingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
