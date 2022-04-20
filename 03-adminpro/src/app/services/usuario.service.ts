import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/registrar-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm): Observable<any> {
    return this.http.post(`${baseUrl}/usuarios`, formData);
  }

  login(formData: LoginForm): Observable<any> {
    return this.http.post(`${baseUrl}/login`, formData);
  }
}
