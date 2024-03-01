import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
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
  standalone: true,
  imports: [CommonModule, ButtonModule],
})
export class LoginComponent {}
