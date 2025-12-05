import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export const AuthExpiredInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  const cloned = req.clone({
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
  });

  return new Observable<HttpEvent<any>>(observer => {
    next(cloned).subscribe({
      next: (event) => observer.next(event),

      error: (err) => {
        if (err.status === 401) {
          localStorage.removeItem('token');
          router.navigate(['/login']);
          alert('Tu sesión ha expirado. Vuelve a iniciar sesión.');
        }
        observer.error(err);
      },

      complete: () => observer.complete()
    });
  });
};

