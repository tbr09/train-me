import { switchMap, debounceTime } from 'rxjs/operators';
import { ExerciseModel } from './../../../../../exercises/models/exercise.model';
import { ExerciseClient } from '../../../../../../services/api/api.service';
import { delay } from 'rxjs/internal/operators';
import { getExercises } from '../../../../../exercises/store/exercise.selectors';
import { ExerciseState } from '../../../../../exercises/store/exercise.state';
import { Observable, BehaviorSubject, EMPTY, Subject, combineLatest } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, startWith, mergeMap } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-add-training-exercise-modal',
  templateUrl: './add-training-exercise-modal.component.html',
  styleUrls: ['./add-training-exercise-modal.component.scss'],
})
export class AddTrainingExerciseModalComponent implements OnInit {
  filteredExercises$: Observable<ExerciseModel[]>;
  // filteredExercises: ExerciseModel[];

  selectedExercise: ExerciseModel;
  bodyParts = Constants.bodyParts;

  searchTerm = new Subject<string>();
  searchTermChanged$ = this.searchTerm.asObservable();

  addTrainingExerciseForm = this.formBuilder.group({
    exercise: ['', Validators.required],
    repetitions: [
      [],
      Validators.compose([
        Validators.required,
        Validators.pattern('^\\d+(\\,\\d+)*$'),
      ]),
    ],
    breakTime: [60, Validators.required],
    suggestion: [''],
    alternativeExercise: [''],
    weight: [0],
  });

  constructor(
    private dialogRef: MatDialogRef<AddTrainingExerciseModalComponent>,
    private formBuilder: FormBuilder,
    private exerciseService: ExerciseClient
  ) {
    // WORKING
    // with subject/behaviorSubject
    this.addTrainingExerciseForm
      .get('exercise')
      .valueChanges.pipe(debounceTime(1000))
      .subscribe((term) => this.searchTerm.next(term));

    this.addTrainingExerciseForm
      .get('alternativeExercise')
      .valueChanges.pipe(debounceTime(1000))
      .subscribe((term) => this.searchTerm.next(term));

    this.filteredExercises$ = this.searchTermChanged$.pipe(
      switchMap((value) => this.filterExercises(value))
    );

    // WORKING
    // subscribe with pipe in html
    // this.filteredExercises$ = this.addTrainingExerciseForm
    //   .get('exercise')
    //   .valueChanges.pipe(
    //     debounceTime(1000),
    //     switchMap((value) => this.filterExercises(value))
    //   );

    // WORKING
    // subscribe here and assign to model
    // this.addTrainingExerciseForm
    //   .get('exercise')
    //   .valueChanges.pipe(
    //     debounceTime(1000),
    //     switchMap((value) => this.filterExercises(value))
    //   )
    //   .subscribe((result) => (this.filteredExercises = result));
  }

  ngOnInit(): void {}

  submit() {
    this.dialogRef.close(this.addTrainingExerciseForm);
  }

  close() {
    this.dialogRef.close();
  }

  getExerciseName(exercise) {
    return exercise.name;
  }

  private filterExercises(value: String): Observable<ExerciseModel[]> {
    if (typeof value === 'string') {
      return this.exerciseService.getExercisesByTerm(value.toLowerCase());
    }
    return EMPTY;
  }

  updateSelectedExercise($event) {
    this.selectedExercise = $event.option.value;
  }
}
