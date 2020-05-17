import { getTrainingDetails, getIsLoading, getIsError } from "./store/training-details.selectors";
import {
  TrainingDetailsActionTypes,
  AddExerciseToTraining,
} from "./store/training-details.action";
import { TrainingDetailsState } from "./store/training-details.state";
import { AddTrainingExerciseModalComponent } from "./components/add-training-exercise-modal/add-training-exercise-modal.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { categories } from "../../../../constant/exercise.constant";
import { delay } from "rxjs/internal/operators";
import { TrainingClient } from "../../../../services/api/api.service";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { TrainingModel } from "../../models/training.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { TrainingDetailsActions } from "./store";

@Component({
  selector: "app-training-details",
  templateUrl: "./training-details.component.html",
  styleUrls: ["./training-details.component.scss"],
})
export class TrainingDetailsComponent implements OnInit {
  @Input()
  trainingId: number = 0;

  training$: Observable<TrainingModel>;
  isLoading$: Observable<boolean>;
  isError$: Observable<boolean>;

  addExerciseDialogRef: MatDialogRef<AddTrainingExerciseModalComponent>;

  categories = categories;
  displayedColumns: string[] = [
    "exerciseTitle",
    "category",
    "repetitions",
    "difficulty",
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private trainingDetailsStore: Store<TrainingDetailsState>
  ) {
    this.route.params.subscribe((params) => {
      this.trainingId = params["id"];
      this.training$ = this.trainingDetailsStore
        .select(getTrainingDetails)
        .pipe(delay(2000));

      this.trainingDetailsStore.dispatch(
        new TrainingDetailsActions.LoadTrainingDetails(this.trainingId)
      );
    });
    this.isLoading$ = this.trainingDetailsStore.pipe(select(getIsLoading));
    this.isError$ = this.trainingDetailsStore.pipe(select(getIsError));
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

  handleAddTrainingExerciseForm(result) {
    if (result !== undefined) {
      this.trainingDetailsStore.dispatch(
        new AddExerciseToTraining(
          Number(this.trainingId),
          result.value.exercise.id,
          result.value.repetitions.split(', ').map(Number)
        )
      );
    }
  }

  ngOnInit(): void {}
}
