import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HeadersHttp } from '../interfaces/headers.interface';
import { CargarHospitalesResponse } from '../interfaces/cargar-hospitales-response.interface';
import { CrearHospitalResponse } from '../interfaces/crear-hospital-response.interface';
import { ActualizarHospitalResponse } from '../interfaces/actualizar-hospital-response.interface';
import { EliminarHospitalResponse } from '../interfaces/eliminar-hospital-response.interface';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(): HeadersHttp {
    return {
      headers: { 'x-token': this.token },
    };
  }

  cargarHospitales(desde = 0, limite = 5) {
    // const url = `${BASE_URL}/hospitales?desde=${desde}&limite=${limite}`;
    const url = `${BASE_URL}/hospitales`;
    return this.http
      .get<CargarHospitalesResponse>(url, this.headers)
      .pipe(map((resp) => resp.hospitales));
  }

  crearHospital(nombre: string) {
    const url = `${BASE_URL}/hospitales`;
    return this.http.post<CrearHospitalResponse>(url, { nombre }, this.headers);
  }

  actualizarHospital(id: string, nombre: string) {
    const url = `${BASE_URL}/hospitales/${id}`;
    return this.http.put<ActualizarHospitalResponse>(
      url,
      { nombre },
      this.headers
    );
  }

  eliminarHospital(id: string) {
    const url = `${BASE_URL}/hospitales/${id}`;
    return this.http.delete<EliminarHospitalResponse>(
      url,
      this.headers
    );
  }
}
