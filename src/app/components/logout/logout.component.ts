import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../actions';
import { AppState } from '../../reducers';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private store: Store<AppState>) { }

  public onLogoutClicked() {
    this.store.dispatch(new Logout());
  }
}
