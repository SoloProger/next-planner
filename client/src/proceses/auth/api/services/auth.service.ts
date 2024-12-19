import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AuthRequest } from '../../model/types/AuthRequest';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../model/types/AuthResponse';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);

  public login(loginForm: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${environment.apiUrl}/auth/login`,
      loginForm
    );
  }
}
