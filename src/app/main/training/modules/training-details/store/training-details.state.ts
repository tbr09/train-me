import { TrainingExerciseModel } from "../../../models/training-exercise.model";
import { TrainingModel } from "../../../models/training.model";

export const trainingDetailsStateName = "trainingDetailsStateName";

export interface TrainingDetailsState {
  selectedTraining: TrainingModel;
  isAsyncLoading: boolean;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: TrainingDetailsState = {
  selectedTraining: {
    id: 1,
    name: "Trening 1",
    description: "Opis treningu 1",
    trainingType: 1,
    difficulty: 0,
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
  },
  isAsyncLoading: false,
  isLoading: true,
  isError: null,
};
