import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from './models';
import { getIsUserLoggedIn } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isUserLoggedIn: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.isUserLoggedIn = this.store.pipe(select(getIsUserLoggedIn));
  }
}
