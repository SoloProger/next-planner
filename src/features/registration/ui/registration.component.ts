import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-registration',
  template: `<p-button label="Зарегистрироваться"></p-button>`,
  styles: [
    `
      :host ::ng-deep {
        .p-button {
          width: 100%;
          padding: 18px;
        }
      }
    `,
  ],
  standalone: true,
  imports: [ButtonModule],
})
export class RegistrationComponent {}
