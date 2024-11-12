import {Component} from '@angular/core';
import {NavbarComponent} from "../../../navbar/ui/navbar.component";
import {SidebarComponent} from "../../../sidebar/ui/sidebar.component";

@Component({
  selector: 'app-main-layout',
  template: `
    <app-navbar></app-navbar>
    <main class="flex gap-24 relative">
      <app-sidebar></app-sidebar>
      <ng-content></ng-content>
    </main>`,
  imports: [
    NavbarComponent,
    SidebarComponent
  ],
  standalone: true
})

export class MainLayoutComponent {
}
