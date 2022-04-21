import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/registrar-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterResponse } from '../interfaces/register-response.interfaces';
import { LoginResponse } from '../interfaces/login-response.interfaces';
import { RenewTokenResponse } from '../interfaces/validate-token-response.interfaces';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  valiarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http
      .get<any>(`${baseUrl}/login/renew`, {
        headers: { 'x-token': token },
      })
      .pipe(
        tap((resp: RenewTokenResponse) => {
          localStorage.setItem('token', resp.token);
        }),
        map(() => true),
        catchError(() => of(false))
      );
  }

  crearUsuario(formData: RegisterForm): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(`${baseUrl}/usuarios`, formData)
      .pipe(
        tap((resp) => {
          localStorage.setItem('token', resp.token);
        })
      );
  }

  login(formData: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${baseUrl}/login`, formData).pipe(
      tap((resp) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  loginGoogle(token: string): Observable<any> {
    return this.http.post<any>(`${baseUrl}/login/google`, { token }).pipe(
      tap((resp) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
}
