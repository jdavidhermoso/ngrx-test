import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from '../actions';
import { UserSessionState } from '../models';

export const initialUserSessionState: UserSessionState = {
  isUserLoggedIn: false
};

export function userSessionReducer(state = initialUserSessionState, action: LoginActions): UserSessionState {
  switch (action.type) {

    case LoginActionTypes.LoginSuccess: {
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
      return state;
  }
}

export const selectUserSession = createFeatureSelector<UserSessionState>('userSession');

export const getIsUserLoggedIn = createSelector(
  selectUserSession,
  (userSession) => userSession.isUserLoggedIn
);
