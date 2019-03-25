import { City } from './city.model';
import { UserSessionState } from './user-session-state.model';

export interface AppState {
  isAppLoading: boolean;
  userSession: UserSessionState;
  cities: City[]
}
