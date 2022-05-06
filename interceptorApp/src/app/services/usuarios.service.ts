import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    const params = new HttpParams()
      .append('page', '2')
      .append('first_name', 'Matias');

    return this.http
      .get('https://reqres12.in/api/users', {
        params,
      })
      .pipe(map((resp: any) => resp.data));
  }
}
