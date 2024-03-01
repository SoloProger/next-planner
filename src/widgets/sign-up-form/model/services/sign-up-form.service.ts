import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUpForm } from '../types';

@Injectable()
export class SignUpFormService {
  constructor(private readonly fb: FormBuilder) {}

  public signUpForm() {
    return this.fb.nonNullable.group<SignUpForm>({
      userName: '',
      email: '',
      password: '',
    });
  }
}
