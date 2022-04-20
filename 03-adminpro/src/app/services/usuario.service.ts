import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/registrar-form.interface';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm): Observable<any> {
    return this.http.post(`${baseUrl}/usuarios`, formData);
  }
}
