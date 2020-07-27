import { Constants } from 'src/app/constants/constants';
import { AuthService } from './../../shared/auth/auth-service.component';
import { TrainingExerciseModel } from '../../main/training/models/training-exercise.model';
import { TrainingModel } from '../../main/training/models/training.model';
import { LoginData } from './../../login/models/logindata.model';
import { Observable, defer, from } from 'rxjs';
import { BasicUserProfileModel } from 'src/app/main/dashboard/models/userprofile.model';
import { Injectable } from '@angular/core';
import { ExerciseModel } from 'src/app/main/exercises/models/exercise.model';
import {
  HttpClient,
  HttpResponseBase,
  HttpHeaders,
} from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { AddExerciseToTrainingModel } from 'src/app/main/training/modules/training-details/models/add-exercise-to-training.model';

export interface ITrainingService {
  getTrainings(): Observable<TrainingModel[]>;
  getTraining(id: number): Observable<TrainingModel>;
  addExercise(
    model: AddExerciseToTrainingModel
  ): Observable<TrainingExerciseModel>;
}

@Injectable({
  providedIn: 'root',
})
export class TrainingClient implements ITrainingService {
  constructor(private http: HttpClient) {}

  getTrainings(): Observable<TrainingModel[]> {
    return defer(() => Promise.resolve(trainings));
  }

  getTraining(id: number): Observable<TrainingModel> {
    return defer(() => Promise.resolve(trainings.find((t) => t.id == id))).pipe(
      delay(2000)
    );
  }

  addExercise(
    model: AddExerciseToTrainingModel
  ): Observable<TrainingExerciseModel> {
    return this.http.post<TrainingExerciseModel>(
      `${Constants.config.apiUrl}/training/addexercise`,
      {
        trainingId: model.trainingId,
        exerciseId: model.exerciseId,
        repetitions: model.repetitions,
      }
    );
  }
}

export interface IUserService {
  userProfile(): Observable<BasicUserProfileModel>;
}

@Injectable({
  providedIn: 'root',
})
export class UserClient implements IUserService {
  userProfile(): Observable<BasicUserProfileModel> {
    const returnValue = {
      id: '1hr45hr4bfh35hrn',
      firstName: 'Will',
      lastName: 'Smith',
    };
    return defer(() => Promise.resolve(returnValue));
  }
}

export interface IExerciseService {
  getExercises(): Observable<ExerciseModel[]>;
  getExercisesByTerm(name: string): Observable<ExerciseModel[]>;
}

@Injectable({
  providedIn: 'root',
})
export class ExerciseClient implements IExerciseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getExercises(): Observable<ExerciseModel[]> {
    const returnValue = [
      {
        id: 1,
        name: 'Russian Twist',
        description: '-',
        category: 0,
        bodyPart: 3,
        difficulty: 1,
        videoLink: '',
        icon: '',
      },
      {
        id: 2,
        name: 'Dzień dobry z kettlebell',
        description: '-',
        category: 1,
        bodyPart: 2,
        difficulty: 2,
        videoLink: '',
        icon: '',
      },
      {
        id: 3,
        name: 'Przyciąganie do twarzy na TRX',
        description: '-',
        category: 3,
        bodyPart: 1,
        videoLink: '',
        difficulty: 4,
        icon: '',
      },
    ];
    return defer(() => Promise.resolve(returnValue)).pipe(delay(2000));
  }

  getExercisesByTerm(name: string): Observable<ExerciseModel[]> {
    // return from(
    //   this.authService.getAccessToken().then((token) => {
    //     var headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    //     return this.http
    //       .get<ExerciseModel[]>(`${Constants.config.apiUrl}/exercise/search/${name}`, {
    //         headers: headers,
    //       })
    //       .toPromise();
    //   })
    // );
    return this.http.get<ExerciseModel[]>(
      `${Constants.config.apiUrl}/exercise/search/${name}`
    );
  }
}

export interface IAuthService {
  login(loginData: LoginData): Observable<string>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthClient implements IAuthService {
  login(): Observable<string> {
    return defer(() => Promise.resolve('token'));
  }
}

const trainings = [
  {
    id: 1,
    name: 'Trening 1',
    description: 'Opis treningu 1',
    trainingType: 1,
    difficulty: 0,
    exercises: [
      {
        repetitions: [12, 10, 8],
        exerciseId: 1,
        exerciseTitle: 'Cwiczenie 1',
        category: 1,
        bodyPart: 2,
        difficulty: 1,
      } as TrainingExerciseModel,
    ],
  } as TrainingModel,
  {
    id: 2,
    name: 'Trening 2',
    trainingType: 4,
    difficulty: 2,
    exercises: [
      {
        repetitions: [12, 10, 8],
        exerciseId: 1,
        exerciseTitle: 'Cwiczenie 1',
        category: 1,
        bodyPart: 2,
        difficulty: 1,
      } as TrainingExerciseModel,
      {
        repetitions: [6, 6, 4],
        exerciseId: 1,
        exerciseTitle: 'Cwiczenie 1',
        category: 1,
        bodyPart: 2,
        difficulty: 1,
      } as TrainingExerciseModel,
    ],
  } as TrainingModel,
];
