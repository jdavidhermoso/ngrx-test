import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppLoadingEnd, AppLoadingStart, LoadingActionTypes } from '../actions';
import { LoadingState } from '../models';

export const initialLoadingState: LoadingState = {
  isAppLoading: false
};

export function loadingReducer(state = initialLoadingState, action: AppLoadingStart | AppLoadingEnd): LoadingState {
  switch (action.type) {
    case LoadingActionTypes.AppLoadingStart: {
      return {
        ...state,
        isAppLoading: true
      };
    }

    case LoadingActionTypes.AppLoadingEnd: {
      return {
        ...state,
        isAppLoading: false
      };
    }

    default:
      return state;
  }
}

export const selectLoadingState = createFeatureSelector<LoadingState>('loading');

export const getIsAppLoading = createSelector(
  selectLoadingState,
  (data: LoadingState) => data.isAppLoading
);



