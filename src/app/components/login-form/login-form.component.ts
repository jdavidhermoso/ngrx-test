import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginRequest } from '../../actions';
import { LoginUserData, UserSessionState } from '../../models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public userNameFormControl: FormControl = new FormControl();
  public passwordFormControl: FormControl = new FormControl();

  constructor(private store: Store<UserSessionState>) {
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onLoginClicked(evt): void {
    evt.preventDefault();
    const loginUserData: LoginUserData = {
      username: this.userNameFormControl.value,
      password: this.passwordFormControl.value
    };

    this.store.dispatch(new LoginRequest(loginUserData));
  }

  private buildForm() {
    this.loginForm = new FormGroup({
      userName: this.userNameFormControl,
      password: this.passwordFormControl
    })
  }
}
