import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CitiesRequestSuccess, DataActionTypes } from '../actions';
import { DataState } from '../models/data-state.model';


export const initialDataState: DataState = {
  cities: []
};

export function dataReducer(state = initialDataState, action: CitiesRequestSuccess): DataState {
  switch (action.type) {

    case DataActionTypes.CitiesRequestSuccess: {
      return {
        ...state,
        cities: action.payload
      };
    }

    default:
      return state;
  }
}

export const selectData = createFeatureSelector<DataState>('data');

export const getCities = createSelector(
  selectData,
  (data) => data.cities
);
