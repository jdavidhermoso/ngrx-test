import { Action } from '@ngrx/store';
import { LoginUserData } from '../models/login-user-data.model';

export enum LoginActionTypes {
  LoginRequest = '[Login Page] LoginRequest',
  LoginSuccess = '[Login Page] LoginSuccess',
  LoginFailed = '[Login Page] LoginFailed',
  Logout = '[Login Page] Logut',
}

export class LoginRequest implements Action {
  readonly type = LoginActionTypes.LoginRequest;

  constructor(public payload: LoginUserData) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
}

export class LoginFailed implements Action {
  readonly type = LoginActionTypes.LoginFailed;
}

export class Logout implements Action {
  readonly type = LoginActionTypes.Logout;
}

export type LoginActions = LoginRequest
  | LoginSuccess
  | LoginFailed
  | Logout;

