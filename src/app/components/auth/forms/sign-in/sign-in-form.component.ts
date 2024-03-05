import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService } from '../../services/form.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
})
export class SignInFormComponent implements OnInit {
  public signInForm!: FormGroup;
  public formService = inject(AuthFormService);

  ngOnInit() {
    this.signInForm = this.formService.signInForm();
  }
}
