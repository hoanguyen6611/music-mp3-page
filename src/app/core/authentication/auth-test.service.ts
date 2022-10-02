import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, UserRegister } from '../data';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {
  apiUrl = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) { }

  login(user: UserLogin) {
    return this.httpClient.post(`${this.apiUrl}/authentication/login`, user);
  }

  isLoggedIn() {
    return localStorage.getItem('token')!=null;
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  logout(){
    return this.httpClient.get(`${this.apiUrl}/authentication/logout`);
  }

  register(user: UserRegister) {
    return this.httpClient.post(`${this.apiUrl}/authentication/register`,user)
  }

}
