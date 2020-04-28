import { Component, OnInit } from "@angular/core";
import { delay } from "rxjs/internal/operators";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getTrainings, getIsLoading } from "../../store/trainings.selectors";
import { TrainingState } from "../../store/trainings.state";
import { TrainingActionTypes } from "../../store/trainings.action";
import { TrainingModel } from "../../models/training.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-training-list",
  templateUrl: "./training-list.component.html",
  styleUrls: ["./training-list.component.scss"],
})
export class TrainingListComponent implements OnInit {
  trainings$: Observable<TrainingModel[]>;
  filteredTrainings$: Observable<TrainingModel[]>;

  isLoading$: Observable<boolean>;

  displayedColumns: string[] = ["id", "name"];

  constructor(
    private trainingStore: Store<TrainingState>,
    private router: Router
  ) {
    this.trainings$ = this.trainingStore.select(getTrainings).pipe(delay(2000));
    this.isLoading$ = this.trainingStore.select(getIsLoading);
  }

  ngOnInit(): void {
    this.trainingStore.dispatch({ type: TrainingActionTypes.LoadTrainings });
  }

  navigateToTraining(row: any) {
    this.router.navigate(["/training/details/" + row.id]);
  }
}
