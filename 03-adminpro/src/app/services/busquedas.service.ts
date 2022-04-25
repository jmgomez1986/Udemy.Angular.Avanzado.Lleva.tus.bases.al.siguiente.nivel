import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeadersHttp } from '../interfaces/headers.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BusquedaResponse } from '../interfaces/busquedas-response.interface';
import { Usuario } from './../models/usuario.model';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class BusquedasService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(): HeadersHttp {
    return {
      headers: { 'x-token': this.token },
    };
  }

  private transformarUsuarios(resultados: any[]): Usuario[] {
    return resultados.map(
      (user) =>
        new Usuario(
          user.nombre,
          user.email,
          user.password,
          user.img,
          user.google,
          user.role,
          user.uid
        )
    );
  }

  buscar(tipo: 'usuarios' | 'medicos' | 'hospitales', termino: string = '') {
    const url = `${BASE_URL}/todo/coleccion/${tipo}/${termino}`;
    return this.http.get<BusquedaResponse>(url, this.headers).pipe(
      map((resp) => {
        switch (tipo) {
          case 'usuarios':
            return this.transformarUsuarios(resp.resultados);
          default:
            return [];
        }
      })
    );
  }
}
