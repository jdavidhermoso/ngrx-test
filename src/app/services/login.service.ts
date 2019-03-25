import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserData } from '../models';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(loginUserData: LoginUserData) {
    console.log('Make login request');
    return this.http.post('http://localhost:3000/login', loginUserData);
  }
}
