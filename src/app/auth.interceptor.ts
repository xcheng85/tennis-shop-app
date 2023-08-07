import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // decorator pattern
    // http request is immutable
    // token expiration and get new token 
    const authReq = request.clone({
      setHeaders: {
        Authorization: 'bearer token',
      },
    });
    return next.handle(authReq);
  }
}
