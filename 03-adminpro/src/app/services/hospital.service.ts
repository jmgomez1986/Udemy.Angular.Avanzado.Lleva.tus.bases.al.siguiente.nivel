import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HeadersHttp } from '../interfaces/headers.interface';
import { CargarHospitalesResponse } from '../interfaces/cargar-hospitales-response.interface';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

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
    return this.http.get<CargarHospitalesResponse>(url, this.headers).pipe(
      map( resp => resp.hospitales)
    );
  }
}
