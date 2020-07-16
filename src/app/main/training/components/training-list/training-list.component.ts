import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getTrainings,
  getIsLoading,
  getIsAsyncLoading,
} from '../../store/trainings.selectors';
import { TrainingState } from '../../store/trainings.state';
import { TrainingActionTypes } from '../../store/trainings.action';
import { TrainingModel } from '../../models/training.model';
import { Router } from '@angular/router';
import { AddTrainingModalComponent } from '../add-training-modal/add-training-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss'],
})
export class TrainingListComponent implements OnInit {
  trainings$: Observable<TrainingModel[]>;
  filteredTrainings$: Observable<TrainingModel[]>;

  isLoading$: Observable<boolean>;
  isAsyncLoading$: Observable<boolean>;

  addTrainingDialogRef: MatDialogRef<AddTrainingModalComponent>;

  trainingTypes = Constants.trainingTypes;
  displayedColumns: string[] = [
    // 'id',
    'name',
    'description',
    'trainingType',
    'difficulty',
    'operations',
  ];

  constructor(
    private trainingStore: Store<TrainingState>,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.trainings$ = this.trainingStore.select(getTrainings).pipe(delay(2000));
    this.isLoading$ = this.trainingStore.select(getIsAsyncLoading);
    this.isLoading$ = this.trainingStore.select(getIsLoading);

    this.trainingStore.dispatch({ type: TrainingActionTypes.LoadTrainings });
  }

  openAddTrainingFormDialog() {
    this.addTrainingDialogRef = this.dialog.open(
      AddTrainingModalComponent,
      {
        width: '40%',
        data: { name: 'example name passed to modal form' },
        disableClose: true,
        autoFocus: true,
      }
    );

    this.addTrainingDialogRef
      .afterClosed()
      .subscribe((result) => this.handleAddTrainingForm(result));
  }

  handleAddTrainingForm(result) {
    if (result !== undefined) {
     
    }
  }

  ngOnInit(): void {}

  openTrainingDetails(trainingId: number) {}

  openEditTrainingModal(trainingId: number) {}

  deleteTraining(trainingId: number) {}

  navigateToTraining(row: any) {
    this.router.navigate(['/training/details/' + row.id]);
  }
}
