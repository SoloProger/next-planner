import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class SignInFormService {
  constructor(private readonly fb: FormBuilder) {}

  public signInForm() {
    return this.fb.nonNullable.group<{ email: string; password: string }>({
      email: '',
      password: '',
    });
  }
}
