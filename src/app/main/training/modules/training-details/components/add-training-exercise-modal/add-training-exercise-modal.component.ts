import { ExerciseModel } from "./../../../../../exercises/models/exercise.model";
import { ExerciseClient } from "../../../../../../services/api/api.service";
import { delay } from "rxjs/internal/operators";
import { getExercises } from "../../../../../exercises/store/exercise.selectors";
import { ExerciseState } from "../../../../../exercises/store/exercise.state";
import { Observable } from "rxjs";
import { MatDialogRef } from "@angular/material/dialog";
import { Validators, FormBuilder } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, startWith } from "rxjs/operators";
import { bodyParts } from 'src/app/constant/exercise.constant';

@Component({
  selector: "app-add-training-exercise-modal",
  templateUrl: "./add-training-exercise-modal.component.html",
  styleUrls: ["./add-training-exercise-modal.component.scss"],
})
export class AddTrainingExerciseModalComponent implements OnInit {
  
  filteredExercises$: Observable<ExerciseModel[]>;
  selectedExercise: ExerciseModel;
  bodyParts = bodyParts;

  addTrainingExerciseForm = this.formBuilder.group({
    exercise: ["", Validators.required],
    repetitions: [[], Validators.compose([Validators.required, Validators.pattern('^\\d+(\\,\\d+)*$')])],
    breakTime: [60, Validators.required],
    suggestion: [""],
    alternativeExercise: [""]
  });
  
  constructor(
    private dialogRef: MatDialogRef<AddTrainingExerciseModalComponent>,
    private formBuilder: FormBuilder,
    private exerciseService: ExerciseClient
  ) {
    this.addTrainingExerciseForm
      .get("exercise")
      .valueChanges.subscribe(
        (value) => (this.filteredExercises$ = this.filterExercises(value))
      );

      this.addTrainingExerciseForm
      .get("alternativeExercise")
      .valueChanges.subscribe(
        (value) => (this.filteredExercises$ = this.filterExercises(value))
      );
  }

  ngOnInit(): void {}

  submit() {
    this.dialogRef.close(this.addTrainingExerciseForm);
  }

  close() {
    this.dialogRef.close();
  }

  getExerciseName(exercise) {
    return exercise.name;
  }

  private filterExercises(value: String): Observable<ExerciseModel[]> {
    if (typeof value === "string") {
      return this.exerciseService.getExercisesByTerm(value.toLowerCase());
    }
  }

  updateSelectedExercise($event) {
    this.selectedExercise = $event.option.value;
  }

}
