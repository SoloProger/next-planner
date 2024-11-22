import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../widgets/layouts/main-layout/ui/main-layout.component';

@Component({
  selector: 'app-main',
  standalone: true,
  template: `
    <app-main-layout>
      <router-outlet></router-outlet>
    </app-main-layout>
  `,
  imports: [CommonModule, RouterModule, MainLayoutComponent],
})
export class MainPageComponent {}
