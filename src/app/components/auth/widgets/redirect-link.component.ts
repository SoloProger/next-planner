import { Component, Input, inject } from '@angular/core';
import { AuthRedirectStore } from '../store/redirect.store';

@Component({
  selector: 'app-auth-redirect-link',
  template: `
    <div appFlex justifyContent="center" class="regular" [gap]="5">
      <p>{{ label }}</p>
      <p-button
        [label]="linkLabel"
        [link]="true"
        (onClick)="redirectStore.redirect()"
      ></p-button>
    </div>
  `,
})
export class RedirectLinkComponent {
  @Input() public linkLabel!: 'Зарегистрироваться' | 'Войти';
  @Input() public label!: string;
  @Input() public navigateLink!: string;

  public redirectStore = inject(AuthRedirectStore);
}
