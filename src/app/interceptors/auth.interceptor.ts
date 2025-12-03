import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  const api = inject(ApiService);
  const token = api.obtenerToken();

  let reqClone = req;

  if (token) {
    reqClone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(reqClone);
};
