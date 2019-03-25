import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  AppLoadingStart = '[App Loading] Start',
  AppLoadingEnd = '[App Loading] End'
}

export class AppLoadingStart implements Action {
  readonly type = LoadingActionTypes.AppLoadingStart;

  constructor() {
    console.log('App loading start!')
  }
}

export class AppLoadingEnd implements Action {
  readonly type = LoadingActionTypes.AppLoadingEnd;


  constructor() {
    console.log('App loading end!')
  }
}

export type LoadingActions = AppLoadingStart
  | AppLoadingEnd;

