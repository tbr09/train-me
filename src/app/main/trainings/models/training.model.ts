import { TrainingExerciseModel } from './training-exercise.model';

export interface TrainingModel {
    id: number;
    name: string;
    description: string;
    exercises: TrainingExerciseModel[];
}
