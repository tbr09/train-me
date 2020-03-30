import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-exercise-modal',
  templateUrl: './add-exercise-modal.component.html',
  styleUrls: ['./add-exercise-modal.component.scss']
})
export class AddExerciseModalComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(AddExerciseModalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit(): void {
  }

}
