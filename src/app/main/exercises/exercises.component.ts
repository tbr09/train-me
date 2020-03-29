import { ExerciseActionTypes } from './store/actions/exercise.action';
import { getExercises } from './store/selectors/exercise.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from './models/exercise.model';
import { ExerciseState } from './store';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises$: Observable<ExerciseModel[]>;

  constructor(private exerciseStore: Store<ExerciseState>) {
    this.exercises$ = this.exerciseStore.select(getExercises);
   }

  ngOnInit(): void {
    this.exerciseStore.dispatch({ type: ExerciseActionTypes.LoadExercises });
  }

}
