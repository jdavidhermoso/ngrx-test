import { Action } from '@ngrx/store';
import { City } from '../models';

export enum DataActionTypes {
  CitiesRequest = '[Data] Cities request',
  CitiesRequestSuccess = '[Data] Cities request Success',
  CitiesRequestFail = '[Data] Cities request Failed'
}

export class CitiesRequest implements Action {
  readonly type = DataActionTypes.CitiesRequest;
}

export class CitiesRequestSuccess implements Action {
  public static of(payload): CitiesRequestSuccess {
    return new CitiesRequestSuccess(payload);
  }

  readonly type = DataActionTypes.CitiesRequestSuccess;

  constructor(public payload: City[]) {}
}

export class CitiesRequestFail implements Action {
  readonly type = DataActionTypes.CitiesRequestFail;

  constructor(public payload: Error) {}
}

export type DataActions = CitiesRequest
  | CitiesRequestSuccess
  | CitiesRequestFail;

