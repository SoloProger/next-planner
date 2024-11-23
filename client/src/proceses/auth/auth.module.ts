import { NgModule } from '@angular/core';
import { LoginFormComponent } from './ui/login/login-form.component';
import { RegistrationFormComponent } from './ui/registration/registration-form.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@NgModule({
  imports: [InputComponent, ButtonComponent],
  exports: [RegistrationFormComponent, LoginFormComponent],
  declarations: [LoginFormComponent, RegistrationFormComponent],
  providers: [],
})
export class AuthModule {}
