import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import {
  DashboardActionTypes,
  LoadUserSuccess,
  LoadUserFail
} from "./dashboard.action";
import { UserClient } from "src/app/services/api/api.service";

@Injectable()
export class DashboardEffects {
  @Effect() loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(DashboardActionTypes.LoadUser),
    switchMap(() => {
      return this.userService.userProfile().pipe(
        map(response => new LoadUserSuccess(response)),
        catchError(error => {
          return of(new LoadUserFail(error));
        })
      );
    })
  );

  // loadUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(DashboardActionTypes.LoadUser),
  //     mergeMap(() => {
  //       return this.userService.userProfile().pipe(
  //         map(
  //           (response: BasicUserProfileModel) => new LoadUserSuccess(response)
  //         ),
  //         catchError(error => {
  //           return of(new LoadUserFail(error));
  //         })
  //       );
  //     })
  //   )
  // );

  constructor(private actions$: Actions, private userService: UserClient) {}
}
