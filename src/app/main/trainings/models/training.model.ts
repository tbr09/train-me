import { TrainingExerciseModel } from './training-exercise.model';

export interface TrainingModel {
    id: string;
    name: string;
    description: string;
    exercises: TrainingExerciseModel[];
}
