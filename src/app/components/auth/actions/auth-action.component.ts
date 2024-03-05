import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-action',
  template: `<p-button label="Войти"></p-button>`,
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
})
export class AuthActionComponent {}
