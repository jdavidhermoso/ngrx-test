import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { City } from '../models';

const fakeCitiesResponse: City[] = [
  {
    'iata': 'PMI',
    'city': 'Palma de Mallorca',
    'country': 'Spain'
  },
  {
    'iata': 'MAD',
    'city': 'Madrid',
    'country': 'Spain'
  },
  {
    'iata': 'BCN',
    'city': 'Barcelona',
    'country': 'Spain'
  }
];

@Injectable()
export class DataService {

  public getCities(): Observable<City[]> {
    return of(fakeCitiesResponse)
  }
}
