import { Router } from '@angular/router';
import { SharedModule } from './../shared.module';
import { Constants } from 'src/app/constants/constants';
import { AuthService } from './auth-service.component';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: SharedModule })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(Constants.config.apiUrl)) {
      return from(
        this.authService.getAccessToken().then((token) => {
          const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
          );
          const authRequest = req.clone({ headers });
          return next
            .handle(authRequest)
            .pipe(
              tap(
                (_) => {},
                (error) => {
                  var respError = error as HttpErrorResponse;
                  if (
                    respError &&
                    (respError.status === 401 || respError.status === 403)
                  ) {
                    this.router.navigate(['/unauthorized']);
                  }
                }
              )
            )
            .toPromise();
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
