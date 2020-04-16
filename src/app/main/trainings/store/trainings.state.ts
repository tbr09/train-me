import { TrainingExerciseModel } from './../models/training-exercise.model';
import { TrainingModel } from "../models/training.model";

export const trainingStateName = "trainingStateName";

export interface TrainingState {
  trainings: TrainingModel[];
  isLoading: boolean;
  isError: boolean;
}

export const initialState: TrainingState = {
  trainings: [
    {
      id: 1,
      name: "Trening 1",
      description: "Opis treningu 1",
      exercises: [
        {
          repetitions: [12, 10, 8],
          exerciseId: 1,
          exerciseTitle: "Cwiczenie 1",
          category: 1,
          bodyPart: 2,
          difficulty: 1,
        } as TrainingExerciseModel,
      ],
    } as TrainingModel,
  ],
  isLoading: true,
  isError: null,
};
