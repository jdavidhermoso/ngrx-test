import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../actions';
import { UserSessionState } from '../../models';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private store: Store<UserSessionState>) {
  }

  public onLogoutClicked() {
    this.store.dispatch(new Logout());
  }
}
