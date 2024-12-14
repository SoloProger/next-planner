import { Component, inject } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../api/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
})
export class LoginFormComponent {
  public form = inject(CustomFormBuilder);

  private auth = inject(AuthService);

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
      .subscribe();
  }
}
