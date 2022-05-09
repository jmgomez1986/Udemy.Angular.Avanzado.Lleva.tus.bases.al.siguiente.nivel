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
    return throwError(() => new Error('Error personalizado'));
  }
}
