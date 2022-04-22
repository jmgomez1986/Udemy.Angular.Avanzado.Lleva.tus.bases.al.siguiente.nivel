import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/registrar-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterResponse } from '../interfaces/register-response.interfaces';
import { LoginResponse } from '../interfaces/login-response.interfaces';
import { RenewTokenResponse } from '../interfaces/validate-token-response.interfaces';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

const baseUrl = environment.baseUrl;

declare const gapi: any;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public auth2: any;
  public usuario: Usuario;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.googleInit();
  }

  googleInit() {
    return new Promise<void>((resolve) => {
      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          clientId:
            '80746467600-dm1vkbgftkp1655i96ur49gftv5rl3n5.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    });
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http
      .get<any>(`${baseUrl}/login/renew`, {
        headers: { 'x-token': token },
      })
      .pipe(
        tap((resp: RenewTokenResponse) => {
          const { email, google, nombre, role, img, uid } = resp.usuario;
          this.usuario = new Usuario(nombre, email, '', img, google, role, uid);
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

  logout() {
    localStorage.removeItem('token');

    gapi.auth2.getAuthInstance();
    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      });
    });
  }
}
