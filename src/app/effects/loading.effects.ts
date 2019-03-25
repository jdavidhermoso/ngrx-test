import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mapTo } from 'rxjs/operators';
import {
  AppLoadingEnd,
  AppLoadingStart,
  DataActionTypes,
  LoginActionTypes
} from '../actions';

@Injectable()
export class LoadingEffects {
  @Effect()
  AppLoadingStart$ = this.actions$.pipe(
    ofType(
      LoginActionTypes.LoginRequest,
      DataActionTypes.CitiesRequest
    ),
    mapTo(new AppLoadingStart())
  );

  @Effect()
  AppLoadingEnd$ = this.actions$.pipe(
    ofType(
      LoginActionTypes.LoginSuccess,
      LoginActionTypes.LoginFail,
      DataActionTypes.CitiesRequestSuccess,
      DataActionTypes.CitiesRequestFail
    ),
    mapTo(new AppLoadingEnd())
  );

  constructor(private actions$: Actions) {
  }
}
