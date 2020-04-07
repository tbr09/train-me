import { ExerciseModel } from "../models/exercise.model";

export const exerciseStateName = "exerciseStateName";

export interface ExerciseState {
  exercises: ExerciseModel[];
  isLoading: boolean;
  isError: boolean;
}

export const initialState: ExerciseState = {
  exercises: [
    {
      id: "0",
      name: "Russian Twist",
      description: "",
      category: 1,
      bodyPart: 2,
      difficulty: 1,
      videoLink: "",
      icon: ""
    },
    {
      id: "1",
      name: "Dzień dobry z kettlebell",
      description: "",
      category: 0,
      bodyPart: 1,
      difficulty: 0,
      videoLink: "",
      icon: ""
    }
  ],
  isLoading: true,
  isError: null
};
