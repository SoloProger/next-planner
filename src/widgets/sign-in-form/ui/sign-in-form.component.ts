import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlexDirective } from '@shared/directives/flex/flex.directive';
import { FlexLayoutComponent } from '@shared/layouts/flex-layout/ui/flex-layout.component';
import { InputComponent } from '@shared/ui/input/input.component';
import { LoginComponent } from 'features/login/ui/login.component';
import { SignInFormService } from '../lib/services/sign-in-form.service';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  templateUrl: './sign-in-form.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    FlexLayoutComponent,
    FlexDirective,
    LoginComponent,
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
