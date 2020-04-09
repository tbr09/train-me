import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExercisesRoutingModule } from "./exercises-routing.module";
import { ExercisesEffects } from "./store/exercise.effect";
import { exerciseStateName, initialState } from "./store/exercise.state";
import { ExercisesComponent } from "./exercises.component";
import { createExerciseReducer } from "./store";
import { AddExerciseModalComponent } from "./components/add-exercise-modal/add-exercise-modal.component";

import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddExerciseModalTemplateFormComponent } from "./components/add-exercise-modal-template-form/add-exercise-modal-template-form/add-exercise-modal-template-form.component";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [
    ExercisesComponent,
    AddExerciseModalComponent,
    AddExerciseModalTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    StoreModule.forFeature(exerciseStateName, createExerciseReducer, {
      initialState,
    }),
    EffectsModule.forFeature([ExercisesEffects]),
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [AddExerciseModalComponent],
})
export class ExercisesModule {}
