import { categories, bodyParts } from './../../constant/exercise.constant';
import { AddExerciseModalComponent } from "./components/add-exercise-modal/add-exercise-modal.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ExerciseActionTypes } from "./store/actions/exercise.action";
import {
  getExercises,
  getIsLoading,
} from "./store/selectors/exercise.selectors";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ExerciseModel } from "./models/exercise.model";
import { delay } from "rxjs/internal/operators";
import { ExerciseState, ExerciseActions } from "./store";

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.scss"],
})
export class ExercisesComponent implements OnInit {
  exercises$: Observable<ExerciseModel[]>;
  isLoading$: Observable<boolean>;
  addExerciseDialogRef: MatDialogRef<AddExerciseModalComponent>;

  categories = categories;
  bodyParts = bodyParts;

  displayedColumns: string[] = [
    "id",
    "name",
    "description",
    "category",
    "bodyPart",
  ];

  constructor(
    private exerciseStore: Store<ExerciseState>,
    private dialog: MatDialog
  ) {
    this.exercises$ = this.exerciseStore.select(getExercises).pipe(delay(2000));
    this.isLoading$ = this.exerciseStore.select(getIsLoading);
  }

  ngOnInit(): void {
    this.exerciseStore.dispatch({ type: ExerciseActionTypes.LoadExercises });
  }

  openAddExerciseFormDialog(): void {
    this.addExerciseDialogRef = this.dialog.open(AddExerciseModalComponent, {
      width: "250px",
      data: { name: "example name passed to modal form" },
      disableClose: true,
      autoFocus: true,
    });

    this.addExerciseDialogRef.afterClosed().subscribe((result) => this.handleAddExerciseForm(result));
  }

  handleAddExerciseForm(formData) {
    if (formData.valid) {
      this.exerciseStore.dispatch(new ExerciseActions.AddExercise(formData.value));
    }
  }

  closeAddExerciseFormDialog() {
    this.addExerciseDialogRef.close("Pizza!");
  }
}
