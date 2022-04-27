import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HeadersHttp } from '../interfaces/headers.interface';
import { BusquedaResponse } from '../interfaces/busquedas-response.interface';
import { Usuario } from './../models/usuario.model';
import { Hospital } from '../models/hospital.model';

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

  private transformarHospitales(resultados: any[]): Hospital[] {
    return resultados;
  }

  buscar(tipo: 'usuarios' | 'medicos' | 'hospitales', termino: string = '') {
    const url = `${BASE_URL}/todo/coleccion/${tipo}/${termino}`;
    return this.http.get<BusquedaResponse>(url, this.headers).pipe(
      map((resp) => {
        switch (tipo) {
          case 'usuarios':
            return this.transformarUsuarios(resp.resultados);
          case 'hospitales':
            return this.transformarHospitales(resp.resultados);
          default:
            return [];
        }
      })
    );
  }
}
