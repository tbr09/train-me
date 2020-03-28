import { ExerciseModel } from "../../models/exercise.model";

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
      category: "",
      bodyPart: "",
      videoLink: "",
      icon: ""
    },
    {
      id: "1",
      name: "Dzień dobry z kettlebell",
      description: "",
      category: "",
      bodyPart: "",
      videoLink: "",
      icon: ""
    }
  ],
  isLoading: false,
  isError: null
};
