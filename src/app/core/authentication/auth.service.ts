import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, UserRegister } from '../data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:5000';

  constructor(private readonly httpClient: HttpClient) {}

  login(user: UserLogin) {
    return this.httpClient.post(`${this.apiUrl}/authentication/login`, user);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  isAdmin() {
    return localStorage.getItem('role') === 'admin';
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  logout() {
    return this.httpClient.post(`${this.apiUrl}/authentication/logout`,
    {}
    );
  }

  register(user: UserRegister) {
    return this.httpClient.post(`${this.apiUrl}/authentication/register`, user);
  }
  loginGoogle(token: string) {
    return this.httpClient.post(`${this.apiUrl}/google-authentication`, {
      token: token
    });
  }
}
