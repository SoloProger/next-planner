import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-action',
  template: `<p-button [label]="label"></p-button>`,
  styleUrl: './auth-action.component.scss',
})
export class AuthActionComponent {
  @Input() public label!: string;
}
