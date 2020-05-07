import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";

import { TrainingsEffects } from "./store/trainings.effect";
import { trainingStateName, initialState } from "./store/trainings.state";
import { TrainingsRoutingModule } from "./training-routing.module";
import { TrainingComponent } from "./training.component";
import { createTrainingReducer } from "./store";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { TrainingDetailsModule } from "./modules/training-details/training-details.module";
import { TrainingListComponent } from './components/training-list/training-list.component';

@NgModule({
  declarations: [TrainingComponent, TrainingListComponent],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    StoreModule.forFeature(trainingStateName, createTrainingReducer, {
      initialState,
    }),
    EffectsModule.forFeature([TrainingsEffects]),
    TrainingDetailsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [],
})
export class TrainingModule {}
