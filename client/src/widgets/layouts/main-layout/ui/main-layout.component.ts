import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/ui/navbar.component';
import { SidebarComponent } from '../../../sidebar/ui/sidebar.component';

@Component({
  selector: 'app-main-layout',
  template: ` <app-navbar></app-navbar>
    <main class="flex gap-5 relative">
      <app-sidebar></app-sidebar>
      <section class="w-100 mr-25">
        <ng-content></ng-content>
      </section>
    </main>`,
  imports: [NavbarComponent, SidebarComponent],
  standalone: true,
})
export class MainLayoutComponent {}
