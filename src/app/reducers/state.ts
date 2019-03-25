import { AppState } from '../models';
import { initialDataState } from './data.reducer';
import { initialUserSessionState } from './userSession.reducer';

export const initialAppState: AppState = {
  userSession: initialUserSessionState,
  data: initialDataState,
  loading: {
    isAppLoading: false
  }
};
