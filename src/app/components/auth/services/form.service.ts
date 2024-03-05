import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUpForm } from '../types';

@Injectable()
export class AuthFormService {
  constructor(private readonly fb: FormBuilder) {}

  public signInForm() {
    return this.fb.nonNullable.group<{ email: string; password: string }>({
      email: '',
      password: '',
    });
  }

  public signUpForm() {
    return this.fb.nonNullable.group<SignUpForm>({
      userName: '',
      email: '',
      password: '',
    });
  }
}
