import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CitiesRequest } from '../../actions';
import { AppState, City } from '../../models';
import { getCities } from '../../reducers';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss']
})
export class SomeComponentComponent implements OnInit {
  public cities: Observable<City[]>;

  constructor(private store$: Store<AppState>) {
  }

  public ngOnInit() {
    this.cities = this.store$.pipe(select(getCities));
    this.store$.dispatch(new CitiesRequest());
  }
}
