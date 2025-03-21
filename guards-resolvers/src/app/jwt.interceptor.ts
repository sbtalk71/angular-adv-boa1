import { HttpInterceptorFn, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export class JwtInterceptor implements HttpInterceptor{
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth=inject(AuthService);
    let clonedReq=req.clone({
      setHeaders:{Authorization:'Bearer '+auth.getToken()}
    })
    return next.handle(clonedReq);
  }
 
};
