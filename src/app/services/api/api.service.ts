import { TrainingModel } from "src/app/main/trainings/trainings/models/training.model";
import { LoginData } from "./../../login/models/logindata.model";
import { Observable, defer } from "rxjs";
import { BasicUserProfileModel } from "src/app/main/dashboard/models/userprofile.model";
import { Injectable } from "@angular/core";
import { ExerciseModel } from "src/app/main/exercises/models/exercise.model";

export interface ITrainingService {
  getTrainings(): Observable<TrainingModel[]>;
}

@Injectable()
export class TrainingClient implements ITrainingService {
  getTrainings(): Observable<TrainingModel[]> {
    const returnValue = [
      {
        id: "1",
        name: "Trening 1",
        description: "Opis treningu 1",
        exercisesIds: [1,3,2]
      },
      {
        id: "2",
        name: "Trening 2",
        description: "Opis treningu 2",
        exercisesIds: [2,3,0]
      },
    ];
    return defer(() => Promise.resolve(returnValue));
  }
}

export interface IUserService {
  userProfile(): Observable<BasicUserProfileModel>;
}

@Injectable()
export class UserClient implements IUserService {
  userProfile(): Observable<BasicUserProfileModel> {
    const returnValue = {
      id: "1hr45hr4bfh35hrn",
      firstName: "Will",
      lastName: "Smith",
    };
    return defer(() => Promise.resolve(returnValue));
  }
}

export interface IExerciseService {
  getExercises(): Observable<ExerciseModel[]>;
}

@Injectable()
export class ExerciseClient implements IExerciseService {
  getExercises(): Observable<ExerciseModel[]> {
    const returnValue = [
      {
        id: "0",
        name: "Russian Twist",
        description: "-",
        category: 0,
        bodyPart: 3,
        videoLink: "",
        icon: "",
      },
      {
        id: "1",
        name: "Dzień dobry z kettlebell",
        description: "-",
        category: 1,
        bodyPart: 2,
        videoLink: "",
        icon: "",
      },
      {
        id: "2",
        name: "Przyciąganie do twarzy na TRX",
        description: "-",
        category: 3,
        bodyPart: 1,
        videoLink: "",
        icon: "",
      },
    ];
    return defer(() => Promise.resolve(returnValue));
  }
}

export interface IAuthService {
  login(loginData: LoginData): Observable<string>;
}

@Injectable()
export class AuthClient implements IAuthService {
  login(): Observable<string> {
    return defer(() => Promise.resolve("token"));
  }
}
