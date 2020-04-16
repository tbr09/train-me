import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { BarRatingModule } from "ngx-bar-rating";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";

import { TrainingsEffects } from "./store/trainings.effect";
import { trainingStateName, initialState } from "./store/trainings.state";
import { TrainingsRoutingModule } from "./trainings-routing.module";
import { TrainingsComponent } from "./trainings.component";
import { createTrainingReducer } from "./store";
import { TrainingDetailsComponent } from "./components/training-details/training-details.component";
import { AddTrainingExerciseModalComponent } from "./components/add-training-exercise-modal/add-training-exercise-modal.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingDetailsComponent,
    AddTrainingExerciseModalComponent,
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    StoreModule.forFeature(trainingStateName, createTrainingReducer, {
      initialState,
    }),
    EffectsModule.forFeature([TrainingsEffects]),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BarRatingModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [AddTrainingExerciseModalComponent],
})
export class TrainingsModule {}
