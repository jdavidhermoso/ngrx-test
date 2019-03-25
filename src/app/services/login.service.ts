import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { LoginUserData } from '../models';

@Injectable()
export class LoginService {

  login(loginUserData: LoginUserData) {
    return of({
      canLogin: true
    });
  }
}
