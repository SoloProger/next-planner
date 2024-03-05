import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-navbar></app-navbar>
    <section appFlex [gap]="20" alignItems="start" extraStyles=" w-100">
      <app-sidebar></app-sidebar>
      <main class="scroll-container w-100 p-24">
        <ng-content></ng-content>
      </main>
    </section>
  `,

  standalone: true,
  imports: [CommonModule, FlexDirective, SidebarComponent, NavbarComponent],
})
export class MainLayoutComponent {}
