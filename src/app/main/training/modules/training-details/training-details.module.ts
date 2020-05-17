import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddTrainingExerciseModalComponent } from "./components/add-training-exercise-modal/add-training-exercise-modal.component";
import { TrainingDetailsComponent } from "./training-details.component";
import { initialState } from "./store";
import {
  TrainingDetailsEffects,
  trainingDetailsStateName,
  createTrainingDetailsReducer,
} from "./store";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { BarRatingModule } from "ngx-bar-rating";
import { EditTrainingExerciseModalComponent } from './components/edit-training-details-modal/edit-training-exercise-modal/edit-training-exercise-modal.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AddTrainingExerciseModalComponent, TrainingDetailsComponent, EditTrainingExerciseModalComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      trainingDetailsStateName,
      createTrainingDetailsReducer,
      {
        initialState,
      }
    ),
    EffectsModule.forFeature([TrainingDetailsEffects]),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BarRatingModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  entryComponents: [AddTrainingExerciseModalComponent],
})
export class TrainingDetailsModule {}
