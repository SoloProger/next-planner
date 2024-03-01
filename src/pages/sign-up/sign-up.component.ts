import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignUpFormComponent } from 'widgets/sign-up-form/ui/sign-up-form.component';
import { AuthLayoutComponent } from '../../shared/layouts/auth-layout/ui/auth-layout.component';

@Component({
  selector: 'app-sign-up',
  template: `
    <app-auth-layout>
      <app-sign-up-form></app-sign-up-form>
    </app-auth-layout>
  `,
  standalone: true,
  imports: [CommonModule, AuthLayoutComponent, SignUpFormComponent],
})
export class SignUpComponent {}
