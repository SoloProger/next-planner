import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlexDirective } from '@shared/directives/flex/flex.directive';
import { LoginComponent } from 'features/login/ui/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthRedirectLink } from 'widgets/auth-redirect-link/ui/auth-redirect-link.component';
import { SignInFormService } from '../model/services/sign-in-form.service';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  templateUrl: './sign-in-form.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexDirective,
    LoginComponent,
    InputTextModule,
    PasswordModule,
    AuthRedirectLink,
  ],
  providers: [SignInFormService],
})
export class SignInFormComponent implements OnInit {
  public signInForm!: FormGroup;
  public signInFormService = inject(SignInFormService);

  ngOnInit() {
    this.signInForm = this.signInFormService.signInForm();
  }
}
