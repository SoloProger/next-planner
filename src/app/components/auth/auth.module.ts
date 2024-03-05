import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthActionComponent } from './actions/auth-action.component';
import { SignInFormComponent } from './forms/sign-in/sign-in-form.component';
import { SignUpFormComponent } from './forms/sign-up/sign-up-form.component';
import { AuthFormService } from './services/form.service';
import { AuthRedirectStore } from './store/redirect.store';
import { RedirectLinkComponent } from './widgets/redirect-link.component';

@NgModule({
  declarations: [
    RedirectLinkComponent,
    AuthActionComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexDirective,
    InputTextModule,
    ButtonModule,
  ],
  providers: [AuthFormService, AuthRedirectStore],
  exports: [SignInFormComponent, SignUpFormComponent],
})
export class AuthModule {}
