import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token-usuario': 'divdnsfndlk',
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
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
