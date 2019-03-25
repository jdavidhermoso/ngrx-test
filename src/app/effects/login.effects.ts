import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import { LoginActionTypes, LoginFailed, LoginSuccess } from '../actions';
import { LoginService } from '../services';

@Injectable()
export class LoginEffects {
  @Effect()
  LoginRequest$ = this.actions$.pipe(
    ofType(
      LoginActionTypes.LoginRequest
    ),
    switchMap(() => {
      return this.loginService.login({
        username: '',
        password: ''
      })
        .pipe(
          mapTo(new LoginSuccess()),
          catchError(err => of(new LoginFailed(err)))
        )
    })
  );

  constructor(private actions$: Actions, private loginService: LoginService) {
  }

}
