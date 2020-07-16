import { Constants } from 'src/app/constants/constants';
import {
  getTrainingDetails,
  getIsLoading,
  getIsError,
  getIsAsyncLoading,
} from './store/training-details.selectors';
import {
  TrainingDetailsActionTypes,
  AddExerciseToTraining,
} from './store/training-details.action';
import { TrainingDetailsState } from './store/training-details.state';
import { AddTrainingExerciseModalComponent } from './components/add-training-exercise-modal/add-training-exercise-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { delay } from 'rxjs/internal/operators';
import { TrainingClient } from '../../../../services/api/api.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { TrainingModel } from '../../models/training.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { TrainingDetailsActions } from './store';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetailsComponent implements OnInit {

  trainingId: number = 0;
  training$: Observable<TrainingModel>;
  
  isAsyncLoading$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isError$: Observable<boolean>;

  pageEvent: PageEvent;

  addExerciseDialogRef: MatDialogRef<AddTrainingExerciseModalComponent>;

  categories = Constants.categories;
  displayedColumns: string[] = [
    'exerciseTitle',
    'category',
    'repetitions',
    'difficulty',
    'operations',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private trainingDetailsStore: Store<TrainingDetailsState>
  ) {
    this.isAsyncLoading$ = this.trainingDetailsStore.pipe(
      select(getIsAsyncLoading)
    );
    this.isLoading$ = this.trainingDetailsStore.pipe(select(getIsLoading));
    this.isError$ = this.trainingDetailsStore.pipe(select(getIsError));

    this.route.params.subscribe((params) => {
      this.trainingId = params['id'];
      this.training$ = this.trainingDetailsStore
        .select(getTrainingDetails)
        .pipe(delay(2000));

      this.trainingDetailsStore.dispatch(
        new TrainingDetailsActions.LoadTrainingDetails(this.trainingId)
      );
    });
  }

  navigateToExercise(row: any) {
    this.router.navigate(['/exercise/' + row.exerciseId]);
  }

  openEditExerciseTrainingModal(exerciseId: number) {}

  deleteExerciseFromTraining(exerciseId: number) {}

  openExerciseDetails(exerciseId: number) {}

  openAddTrainingExerciseFormDialog() {
    this.addExerciseDialogRef = this.dialog.open(
      AddTrainingExerciseModalComponent,
      {
        width: '40%',
        data: { name: 'example name passed to modal form' },
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
        new AddExerciseToTraining({
          trainingId: Number(this.trainingId),
          exerciseId: result.value.exercise.id,
          repetitions: result.value.repetitions.split(',').map(Number),
          breakTime: result.value.breakTime,
          suggestion: result.value.suggestion,
          alternativeExerciseId: result.value.alternativeExercise.id,
        })
      );
    }
  }

  ngOnInit(): void {}
}
