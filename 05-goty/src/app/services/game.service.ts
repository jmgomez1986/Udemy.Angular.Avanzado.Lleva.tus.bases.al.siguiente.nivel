import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private juegos: Game[] = [];

  constructor(private http: HttpClient) {}

  getNominados() {
    if (this.juegos.length > 0) {
      // no tenemos juegos
      console.log('Desde caché');
      return of(this.juegos);
    } else {
      console.log('Desde Internet');
      return this.http
        .get<Game[]>(`${environment.url}/api/goty`)
        .pipe(tap((juegos) => (this.juegos = juegos)));
    }
  }
}
