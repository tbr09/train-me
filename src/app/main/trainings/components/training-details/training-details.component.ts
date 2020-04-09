import { delay } from "rxjs/internal/operators";
import { TrainingClient } from "../../../../services/api/api.service";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { TrainingModel } from "../../models/training.model";

@Component({
  selector: "app-training-details",
  templateUrl: "./training-details.component.html",
  styleUrls: ["./training-details.component.scss"],
})
export class TrainingDetailsComponent implements OnInit {
  @Input()
  trainingId: number = 0;

  training$: Observable<TrainingModel>;

  constructor(private trainingClient: TrainingClient) {
    this.training$ = this.trainingClient
      .getTraining(this.trainingId)
      .pipe(delay(1000));
  }

  ngOnInit(): void {}
}
