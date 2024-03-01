import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlexDirective } from '@shared/directives/flex/flex.directive';
import { RegistrationComponent } from 'features/registration/ui/registration.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthRedirectLink } from 'widgets/auth-redirect-link/ui/auth-redirect-link.component';
import { SignUpFormService } from '../model/services/sign-up-form.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexDirective,
    InputTextModule,
    RegistrationComponent,
    PasswordModule,
    AuthRedirectLink,
  ],
  providers: [SignUpFormService],
})
export class SignUpFormComponent implements OnInit {
  public signUpForm!: FormGroup;
  public signUpFormService = inject(SignUpFormService);

  ngOnInit() {
    this.signUpForm = this.signUpFormService.signUpForm();
  }
}
