import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';

@Component({
  selector: 'app-main-layout',
  template: `
    <main>
      <section appFlex [gap]="20" alignItems="start" extraStyles="h-vh-100">
        <app-sidebar class="h-100"></app-sidebar>
        <ng-content></ng-content>
      </section>
    </main>
  `,
  standalone: true,
  imports: [CommonModule, FlexDirective, SidebarComponent],
})
export class MainLayoutComponent {}
