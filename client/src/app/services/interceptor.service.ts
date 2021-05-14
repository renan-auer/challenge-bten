import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.authService.getToken();
    if (!request.headers.get('Authorization')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {

      return event;
    }, (err) => {
      if (err instanceof HttpErrorResponse)
        if (err.status === 401) {
          console.log(err)
          this.authService.logout()
        }
    }));

  }
}

