import { AddTrainingExerciseModalComponent } from "./../add-training-exercise-modal/add-training-exercise-modal.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { categories } from "./../../../../constant/exercise.constant";
import { delay } from "rxjs/internal/operators";
import { TrainingClient } from "../../../../services/api/api.service";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { TrainingModel } from "../../models/training.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-training-details",
  templateUrl: "./training-details.component.html",
  styleUrls: ["./training-details.component.scss"],
})
export class TrainingDetailsComponent implements OnInit {
  @Input()
  trainingId: number = 0;

  isLoading$: Observable<boolean>;
  training$: Observable<TrainingModel>;

  addExerciseDialogRef: MatDialogRef<AddTrainingExerciseModalComponent>;

  categories = categories;
  displayedColumns: string[] = [
    "exerciseId",
    "exerciseTitle",
    "category",
    "repetitions",
    "difficulty",
  ];

  constructor(
    private trainingClient: TrainingClient,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.route.params.subscribe((params) => {
      this.trainingId = params["id"];
      this.training$ = this.trainingClient
        .getTraining(this.trainingId)
        .pipe(delay(500));
    });
  }

  navigateToExercise(row: any) {
    this.router.navigate(["/exercise/" + row.exerciseId]);
  }

  openAddTrainingExerciseFormDialog() {
    this.addExerciseDialogRef = this.dialog.open(
      AddTrainingExerciseModalComponent,
      {
        width: "250px",
        data: { name: "example name passed to modal form" },
        disableClose: true,
        autoFocus: true,
      }
    );

    this.addExerciseDialogRef
      .afterClosed()
      .subscribe((result) => this.handleAddTrainingExerciseForm(result));
  }

  handleAddTrainingExerciseForm(result) {}

  ngOnInit(): void {}
}
