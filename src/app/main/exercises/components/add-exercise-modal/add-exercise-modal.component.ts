import { Component, OnInit } from "@angular/core";
import {
  MatDialogRef,
} from "@angular/material/dialog";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Constants } from 'src/app/constants/constants';

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

  categories = Constants.categories.map((cat, i) => ({ value: i, viewValue: cat }));
  bodyParts =  Constants.bodyParts.map((bp, i) => ({ value: i, viewValue: bp }));

  constructor(private dialogRef: MatDialogRef<AddExerciseModalComponent>) {}

  submit() {
    this.dialogRef.close(this.addExerciseForm);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
