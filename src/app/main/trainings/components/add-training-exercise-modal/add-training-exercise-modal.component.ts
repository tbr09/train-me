import { ExerciseClient } from "./../../../../services/api/api.service";
import { delay } from "rxjs/internal/operators";
import { getExercises } from "./../../../exercises/store/exercise.selectors";
import { ExerciseState } from "./../../../exercises/store/exercise.state";
import { Observable } from "rxjs";
import { MatDialogRef } from "@angular/material/dialog";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ExerciseModel } from "src/app/main/exercises/models/exercise.model";
import { Store } from "@ngrx/store";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-add-training-exercise-modal",
  templateUrl: "./add-training-exercise-modal.component.html",
  styleUrls: ["./add-training-exercise-modal.component.scss"],
})
export class AddTrainingExerciseModalComponent implements OnInit {
  addTrainingExerciseForm = new FormGroup({
    name: new FormControl("", Validators.required),
    stateCtrl: new FormControl("", Validators.required),
  });

  filteredExercises$: Observable<ExerciseModel[]>;

  constructor(
    private dialogRef: MatDialogRef<AddTrainingExerciseModalComponent>,
    private exerciseStore: Store<ExerciseState>,
    private exerciseService: ExerciseClient
  ) {
    this.addTrainingExerciseForm.get("stateCtrl").valueChanges
      .subscribe((value) => this.filteredExercises$ = this.filterExercises(value));
  }

  ngOnInit(): void {}

  submit() {
    this.dialogRef.close(this.addTrainingExerciseForm);
  }

  close() {
    this.dialogRef.close();
  }

  private filterExercises(value: string): Observable<ExerciseModel[]> {
    return this.exerciseService.getExercisesByTerm(value.toLowerCase());
  }
}
