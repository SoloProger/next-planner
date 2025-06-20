import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CustomFormBuilder extends FormBuilder {
  public validation(controlName: string, form: FormGroup): unknown {
    return {
      invalid:
        form.get(controlName)?.invalid &&
        (form.get(controlName)?.dirty || form.get(controlName)?.touched),
      errors: form.get(controlName)?.errors,
    };
  }
}
