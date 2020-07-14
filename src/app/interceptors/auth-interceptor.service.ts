import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req, next) {
    const idToken = localStorage.getItem("id_token");
    if (idToken) {
    const cloned = req.clone({
    setHeaders:{
      Authorization: idToken
    }});
    return next.handle(cloned);
    }
    else {
    return next.handle(req);
    }
}
}
