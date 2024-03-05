import { Component } from '@angular/core';
import { MainLayoutComponent } from '@app/layouts/main/main-layout.component';

@Component({
  selector: 'app-home-page',
  template: `
    <app-main-layout>
      <div>Hello</div>
    </app-main-layout>
  `,
  standalone: true,
  imports: [MainLayoutComponent],
})
export class HomePageComponent {}
