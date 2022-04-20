import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/registrar-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterResponse } from '../interfaces/register-response.interfaces';
import { LoginResponse } from '../interfaces/login-response.interfaces';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

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
    return this.http.post<any>(`${baseUrl}/login/google`, {token}).pipe(
      tap((resp) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
}
