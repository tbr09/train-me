import {
  categories,
  bodyParts,
} from "./../../../../constant/exercise.constant";
import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-exercise-modal",
  templateUrl: "./add-exercise-modal.component.html",
  styleUrls: ["./add-exercise-modal.component.scss"],
})
export class AddExerciseModalComponent implements OnInit {
  addExerciseForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl(""),
    category: new FormControl(""),
    bodyPart: new FormControl(""),
  });

  categories = categories.map((cat, i) => ({ value: i, viewValue: cat }));
  bodyParts = bodyParts.map((bp, i) => ({ value: i, viewValue: bp }));

  constructor(private dialogRef: MatDialogRef<AddExerciseModalComponent>) {}

  submit() {
    this.dialogRef.close(this.addExerciseForm);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
