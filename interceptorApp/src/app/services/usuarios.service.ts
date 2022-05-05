import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

    return this.http
      .get('https://reqres4351345.in/api/users', {
        params,
        headers,
      })
      .pipe(
        map((resp: any) => resp.data),
        catchError((err: HttpErrorResponse) => this.manejaError(err))
      );
  }

  manejaError(error: HttpErrorResponse) {
    console.log('Sucedio un error!!!');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError(() => new Error('Error personalizado'));
  }
}
