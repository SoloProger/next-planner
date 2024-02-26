import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/layouts/auth-layout/ui/auth-layout.component';
import { SignInFormComponent } from '../../widgets/sign-in-form/ui/sign-in-form.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [CommonModule, AuthLayoutComponent, SignInFormComponent],
})
export class SignInComponent {}
