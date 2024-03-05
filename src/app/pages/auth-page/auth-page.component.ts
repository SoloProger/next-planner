import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AuthModule } from '@app/components/auth/auth.module';
import { AuthRedirectStore } from '@app/components/auth/store/redirect.store';
import { AuthLayoutComponent } from '@app/layouts/auth/auth-layout.component';

@Component({
  selector: 'app-auth-page',
  template: `
    <app-auth-layout>
      @if(!this.authRedirectStore.getRedirectValue()){
      <app-sign-in-form></app-sign-in-form>
      } @else {
      <app-sign-up-form></app-sign-up-form>
      }
    </app-auth-layout>
  `,
  standalone: true,
  imports: [CommonModule, AuthModule, AuthLayoutComponent],
})
export class AuthPageComponent implements OnInit {
  public authRedirectStore = inject(AuthRedirectStore);

  ngOnInit(): void {
    console.log(this.authRedirectStore.getRedirectValue());
  }
}
