import { Component, inject } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../api/services/auth.service';
import { LocalStorageService } from '../../../../shared/lib/services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
})
export class LoginFormComponent {
  public form = inject(CustomFormBuilder);

  private auth = inject(AuthService);
  private localStorage = inject(LocalStorageService);
  private router = inject(Router);

  public loginForm = this.form.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  public enterAuth() {
    this.auth
      .login({
        identifier: this.loginForm.get('login')?.value as string,
        password: this.loginForm.get('password')?.value as string,
      })
      .subscribe(res => {
        this.localStorage.setItem('token', res.jwt);
        this.router.navigate(['/']);
      });
  }
}
