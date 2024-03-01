import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FlexDirective } from '@shared/directives/flex/flex.directive';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth-redirect-link',
  template: `
    <div appFlex justifyContent="center" class="regular" [gap]="5">
      <p>{{ label }}</p>
      <p-button
        [label]="linkLabel"
        [link]="true"
        (onClick)="redirect()"
      ></p-button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FlexDirective, ButtonModule],
})
export class AuthRedirectLink {
  @Input() public linkLabel!: 'Зарегистрироваться' | 'Войти';
  @Input() public label!: string;
  @Input() public navigateLink!: string;

  constructor(private readonly router: Router) {}

  public redirect() {
    this.router.navigate([this.navigateLink]);
  }
}
