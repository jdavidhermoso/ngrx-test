import { LoginActions, LoginActionTypes } from '../actions';

export interface AppState {
  isUserLoggedIn: boolean;
}

export const initialState: AppState = {
  isUserLoggedIn: false
};

export function reducer(state = initialState, action: LoginActions): AppState {
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
