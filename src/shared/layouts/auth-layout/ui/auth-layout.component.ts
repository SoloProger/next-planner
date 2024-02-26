import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  template: ` <main class="bg-gray w-100 h-vh-100 flex jc-center ai-center">
    <ng-content></ng-content>
  </main>`,
  imports: [CommonModule],
})
export class AuthLayoutComponent {}
