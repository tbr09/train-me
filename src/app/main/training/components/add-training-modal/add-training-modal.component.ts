import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-training-modal',
  templateUrl: './add-training-modal.component.html',
  styleUrls: ['./add-training-modal.component.scss']
})
export class AddTrainingModalComponent implements OnInit {
  addTrainingForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl(""),
  });


  constructor(private dialogRef: MatDialogRef<AddTrainingModalComponent>) {}

  submit() {
    this.dialogRef.close(this.addTrainingForm);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
