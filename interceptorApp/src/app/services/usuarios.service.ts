import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    const params = new HttpParams()
      .append('page', '2')
      .append('first_name', 'Matias');

    const headers = new HttpHeaders({
      'token-usuario': 'divdnsfndlk',
    });

    return this.http.get('https://reqres.in/api/users', {
      params,
      headers,
    });
  }
}
