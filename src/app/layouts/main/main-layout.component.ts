import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';

@Component({
  selector: 'app-main-layout',
  template: `
    <main>
      <app-navbar></app-navbar>
      <section
        appFlex
        [gap]="20"
        alignItems="start"
        extraStyles="scroll-container"
      >
        <app-sidebar></app-sidebar>
        <ng-content></ng-content>
      </section>
    </main>
  `,

  standalone: true,
  imports: [CommonModule, FlexDirective, SidebarComponent, NavbarComponent],
})
export class MainLayoutComponent {}
