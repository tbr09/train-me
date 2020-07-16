import { map } from "rxjs/operators";
import { delay } from "rxjs/internal/operators";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { AddExerciseModalComponent } from "./components/add-exercise-modal/add-exercise-modal.component";
import { ExerciseActionTypes } from "./store/exercise.action";
import { getExercises, getIsLoading } from "./store/exercise.selectors";
import { ExerciseModel } from "./models/exercise.model";
import { ExerciseState, ExerciseActions } from "./store";
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.scss"],
})
export class ExercisesComponent implements OnInit {
  exercises$: Observable<ExerciseModel[]>;
  filteredExercises: ExerciseModel[];

  isLoading$: Observable<boolean>;
  addExerciseDialogRef: MatDialogRef<AddExerciseModalComponent>;

  categories = Constants.categories;
  categoriesSelect = Constants.categories.map((cat, i) => ({ value: i, viewValue: cat }));
  bodyParts = Constants.bodyParts;

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

    this.exercises$.subscribe((results) => (this.filteredExercises = results));
  }

  ngOnInit(): void {
    this.exerciseStore.dispatch({ type: ExerciseActionTypes.LoadExercises });
  }

  sortData(event): void {
    if (event.direction === "asc") {
      this.filteredExercises = [...this.filteredExercises].sort((i1, i2) =>
        i1[event.active] > i2[event.active] ? 1 : -1
      );
    } else {
      this.filteredExercises = [...this.filteredExercises].sort((i1, i2) =>
        i1[event.active] < i2[event.active] ? 1 : -1
      );
    }
  }

  categorySelectionChange(event): void {
    this.filteredExercises = [...this.filteredExercises].filter(
      (ex) => ex.category == event.value
    );
  }

  openAddExerciseFormDialog(): void {
    this.addExerciseDialogRef = this.dialog.open(AddExerciseModalComponent, {
      width: "250px",
      data: { name: "example name passed to modal form" },
      disableClose: true,
      autoFocus: true,
    });

    this.addExerciseDialogRef
      .afterClosed()
      .subscribe((result) => this.handleAddExerciseForm(result));
  }

  handleAddExerciseForm(formData) {
    if (formData.valid) {
      this.exerciseStore.dispatch(
        new ExerciseActions.AddExercise(formData.value)
      );
    }
  }

  closeAddExerciseFormDialog() {
    this.addExerciseDialogRef.close("Pizza!");
  }
}
