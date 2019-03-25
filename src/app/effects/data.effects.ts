import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, delay, map, mapTo, switchMap, tap } from 'rxjs/operators';
import {
  DataActionTypes,
  CitiesRequestSuccess,
  CitiesRequestFail
} from '../actions';
import { City } from '../models';
import { DataService } from '../services/data.service';

@Injectable()
export class DataEffects {
  @Effect()
  DataRequest$ = this.actions$.pipe(
    ofType(
      DataActionTypes.CitiesRequest
    ),
    switchMap(() => {
      return this.dataService.getCities()
        .pipe(
          delay(3000),
          map((cities: City[]) => {
            return new CitiesRequestSuccess(cities)
          }),
          catchError(err => of(new CitiesRequestFail(err)))
        )
    })
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
