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
      id: "0",
      name: "Trening 1",
      description: "",
      exercisesIds: [2, 4, 1],
    },
    {
      id: "1",
      name: "Trening 2",
      description: "",
      exercisesIds: [2, 4, 1],
    },
  ],
  isLoading: true,
  isError: null,
};
