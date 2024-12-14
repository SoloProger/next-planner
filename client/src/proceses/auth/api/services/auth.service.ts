import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AuthRequest } from '../../model/types/AuthRequest';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);

  public login(loginForm: AuthRequest) {
    return this.http.post(`${environment.apiUrl}/auth/local`, loginForm);
  }
}
