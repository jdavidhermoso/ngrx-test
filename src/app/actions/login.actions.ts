import { Action } from '@ngrx/store';
import { LoginUserData } from '../models';

export enum LoginActionTypes {
  LoginRequest = '[Login Page] LoginRequest',
  LoginSuccess = '[Login Page] LoginSuccess',
  LoginFailed = '[Login Page] LoginFailed',
  Logout = '[Login Page] Logut',
}

export class LoginRequest implements Action {
  readonly type = LoginActionTypes.LoginRequest;

  constructor(public payload: LoginUserData) {
  }
}

export class LoginSuccess implements Action {
  public static of(): LoginSuccess {
    return new LoginSuccess();
  }

  constructor() {
    console.log('success!');
  }

  readonly type = LoginActionTypes.LoginSuccess;
}

export class LoginFailed implements Action {
  readonly type = LoginActionTypes.LoginFailed;

  constructor(public payload: Error) {
    console.log(payload);
  }
}

export class Logout implements Action {
  readonly type = LoginActionTypes.Logout;
}

export type LoginActions = LoginRequest
  | LoginSuccess
  | LoginFailed
  | Logout;

