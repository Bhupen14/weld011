import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor( private injector:Injector) { }

  intercept(req, next)
  {
    let authService = this.injector.get(AuthService);
    let tokenizeReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.getToken()}`
      }
    }) 
    return next.handle(tokenizeReq);
  }
}
