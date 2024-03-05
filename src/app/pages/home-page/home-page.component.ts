import { Component } from '@angular/core';
import { HomeModule } from '@app/components/home/home.module';
import { MainLayoutComponent } from '@app/layouts/main/main-layout.component';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';

@Component({
  selector: 'app-home-page',
  template: `
    <app-main-layout>
      <section appFlex direction="column" [gap]="20">
        <h2 class="subtitle">Счет</h2>
        <div appFlex justifyContent="space" [gap]="25" extraStyles="w-100">
          <app-check-card class="w-100"></app-check-card>
          <app-valutes-card class="w-100"></app-valutes-card>
        </div>
      </section>
    </app-main-layout>
  `,
  standalone: true,
  imports: [MainLayoutComponent, FlexDirective, HomeModule],
})
export class HomePageComponent {}
