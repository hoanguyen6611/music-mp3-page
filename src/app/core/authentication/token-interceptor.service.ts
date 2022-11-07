import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthTestService } from './auth-test.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private inject:Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice=this.inject.get(AuthTestService);
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ authservice.getToken()
      }
    });
    return next.handle(jwtToken);
  }
}
