import { Component } from '@angular/core';
import { AuthModule } from '../proceses/auth/auth.module';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  template: `
    <section class="w-100 flex  ai-center">
      <div class="p-x-130 w-100 flex-col gap-100">
        @if (isLogin) {
          <app-login-form></app-login-form>
        } @else {
          <!--          <app-registration-form></app-registration-form>-->
        }
        <!--        <span class="flex jc-center ai-center gap-4 subtitle-4 text-color">-->
        <!--          {{ isLogin ? 'Нет аккаунта ?' : 'Уже есть аккаунт ?' }}-->
        <!--          <b class="subtitle-3 title-color pointer" (click)="setIsLogin()">-->
        <!--            {{ isLogin ? 'Зарегистрируйтесь' : 'Войти' }}-->
        <!--          </b>-->
        <!--        </span>-->
      </div>
      <img
        [src]="isLogin ? 'img/login.jpeg' : 'img/register2.png'"
        alt="auth"
        class=" p-y-28 p-x-23 wp-750 hp-845 border-radius-70" />
    </section>
  `,
  standalone: true,
  imports: [AuthModule, NgIf],
})
export class AuthComponent {
  public isLogin = true;

  public setIsLogin() {
    this.isLogin = !this.isLogin;
  }
}
