import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  AppLoadingStart = '[App Loading] Start',
  AppLoadingEnd = '[App Loading] End'
}

export class AppLoadingStart implements Action {
  readonly type = LoadingActionTypes.AppLoadingStart;
}

export class AppLoadingEnd implements Action {
  readonly type = LoadingActionTypes.AppLoadingEnd;
}

export type LoadingActions = AppLoadingStart
  | AppLoadingEnd;

