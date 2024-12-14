import { NgModule } from '@angular/core';
import { LoginFormComponent } from './ui/login/login-form.component';
import { RegistrationFormComponent } from './ui/registration/registration-form.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './api/services/auth.service';

@NgModule({
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  exports: [RegistrationFormComponent, LoginFormComponent],
  declarations: [LoginFormComponent, RegistrationFormComponent],
  providers: [AuthService],
})
export class AuthModule {}
