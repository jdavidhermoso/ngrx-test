import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  LoginRequest = '[Login Page] LoginRequest',
  LoginSuccess = '[Login Page] LoginSuccess',
  LoginFailed = '[Login Page] LoginFailed',
}

export class LoginRequest implements Action {
  readonly type = LoginActionTypes.LoginRequest;

  constructor(public payload: { username: string; password: string }) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
}

export class LoginFailed implements Action {
  readonly type = LoginActionTypes.LoginFailed;
}

export type LoginActions = LoginRequest
  | LoginSuccess
  | LoginFailed;

