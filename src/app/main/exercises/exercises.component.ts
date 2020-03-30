import { ExerciseActionTypes } from './store/actions/exercise.action';
import { getExercises, getIsLoading } from './store/selectors/exercise.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from './models/exercise.model';
import { delay } from 'rxjs/internal/operators';
import { ExerciseState } from './store';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises$: Observable<ExerciseModel[]>;
  isLoading$: Observable<boolean>;
  displayedColumns: string[] = ['id', 'name', 'description', 'category', 'bodyPart'];

  constructor(private exerciseStore: Store<ExerciseState>) {
    this.exercises$ = this.exerciseStore.select(getExercises).pipe(delay(2000));
    this.isLoading$ = this.exerciseStore.select(getIsLoading);
   }

  ngOnInit(): void {
    this.exerciseStore.dispatch({ type: ExerciseActionTypes.LoadExercises });
  }

}
