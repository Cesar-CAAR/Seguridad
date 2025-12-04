import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const api = inject(ApiService);
  const router = inject(Router);

  const token = api.obtenerToken();

  if (token) {
    return true; // Usuario autenticado
  }

  // Si no hay token → enviamos al login
  router.navigate(['/login']);
  return false;
};
