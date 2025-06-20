import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalStorageService } from '../services/localstorage.service';

export function authGuard() {
  const router = inject(Router);
  const localStorage = inject(LocalStorageService);
  const isAuth = localStorage.getItem('token') !== null;

  if (isAuth) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }
}
