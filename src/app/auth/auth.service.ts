import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';

  constructor(private http: HttpClient) {}

  login(): Observable<string> {
    return this.http
      .post<string>('https://fakestoreapi.com/auth/login', {
        username: 'xcheng85_888',
        password: 'xcheng85_888_1234',
      })
      .pipe(tap((token) => (this.token = token)));
  }

  logout() {
    this.token = '';
  }

  get isLoggedIn() {
    return this.token !== '';
  }
}
