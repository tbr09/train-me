import { TrainingComponent } from "./training.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { TrainingListComponent } from "./components/training-list/training-list.component";
import { TrainingDetailsComponent } from "./modules/training-details/training-details.component";

const routes: Routes = [
  {
    path: "",
    component: TrainingComponent,
    children: [
      {
        path: "list",
        component: TrainingListComponent,
      },
      {
        path: "details/:id",
        component: TrainingDetailsComponent,
      },
      { path: "", redirectTo: "list", pathMatch: "full" },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingsRoutingModule {}
