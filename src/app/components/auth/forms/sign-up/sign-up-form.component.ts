import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService } from '../../services/form.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent implements OnInit {
  public signUpForm!: FormGroup;
  public formService = inject(AuthFormService);

  ngOnInit() {
    this.signUpForm = this.formService.signUpForm();
  }
}
