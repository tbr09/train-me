import { LoginData } from "./../../login/models/logindata.model";
import { Observable, defer } from "rxjs";
import { BasicUserProfileModel } from "src/app/main/dashboard/models/userprofile.model";
import { Injectable } from "@angular/core";
import { ExerciseModel } from "src/app/main/exercises/models/exercise.model";

export interface IUserService {
  userProfile(): Observable<BasicUserProfileModel>;
}

@Injectable()
export class UserClient implements IUserService {
  userProfile(): Observable<BasicUserProfileModel> {
    const returnValue = {
      id: "1hr45hr4bfh35hrn",
      firstName: "Will",
      lastName: "Smith"
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
      },
      {
        id: "2",
        name: "Przyciąganie do twarzy na TRX",
        description: "",
        category: "",
        bodyPart: "",
        videoLink: "",
        icon: ""
      }
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
