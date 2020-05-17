
export interface AddExerciseToTrainingModel {
    trainingId: number;
    repetitions: number[];
    exerciseId: number;
    breakTime: number;
    suggestion: string;
    alternativeExerciseId: number;
}