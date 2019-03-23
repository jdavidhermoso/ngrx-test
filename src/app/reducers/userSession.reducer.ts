import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from '../actions';

export const initialState: UserSessionState = {
  isUserLoggedIn: false
};

export interface UserSessionState {
  isUserLoggedIn: boolean;
}

export interface AppState {
  userSession: UserSessionState;
}

export function userSessionReducer(state = initialState, action: LoginActions): UserSessionState {
  switch (action.type) {

    case LoginActionTypes.LoginRequest: {
      return {
        ...state,
        isUserLoggedIn: true
      };
    }

    case LoginActionTypes.Logout: {
      return {
        ...state,
        isUserLoggedIn: false
      };
    }

    default:
      return initialState;
  }
}

export const selectUserSession = createFeatureSelector<UserSessionState>('userSession');

export const getIsUserLoggedIn = createSelector(
  selectUserSession,
  (userSession) => userSession.isUserLoggedIn
);
