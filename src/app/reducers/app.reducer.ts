import { LoginActions, LoginActionTypes } from '../actions';

export interface AppState {
  isUserLoggedIn: boolean;
}

export const initialState: AppState = {
  isUserLoggedIn: false
};

export function reducer(state = initialState, action: LoginActions): AppState {
  switch (action.type) {

    case LoginActionTypes.LoginSuccess: {
      return {
        ...state,
        isUserLoggedIn: true
      };
    }

    default:
      return initialState;
  }
}
