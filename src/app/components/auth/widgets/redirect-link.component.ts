import { Component, Input, inject } from '@angular/core';
import { AuthRedirectStore } from '../store/redirect.store';

@Component({
  selector: 'app-auth-redirect-link',
  template: `
    <div appFlex justifyContent="center" class="regular" [gap]="5">
      <p>{{ label }}</p>
      <span class="text-primary pointer" (click)="redirectStore.redirect()">{{
        linkLabel
      }}</span>
    </div>
  `,
})
export class RedirectLinkComponent {
  @Input() public linkLabel!: 'Зарегистрироваться' | 'Войти';
  @Input() public label!: string;
  @Input() public navigateLink!: string;

  public redirectStore = inject(AuthRedirectStore);
}
