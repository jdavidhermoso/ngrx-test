import { DataState } from './data-state.model';
import { LoadingState } from './loading-state.model';
import { UserSessionState } from './user-session-state.model';

export interface AppState {
  loading: LoadingState;
  userSession: UserSessionState;
  data: DataState;
}
