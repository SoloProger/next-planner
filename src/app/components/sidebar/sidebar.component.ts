import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';
import { sidebarLinks } from './sidebar-links';

@Component({
  selector: 'app-sidebar',
  template: `
    <aside class="p-28 wp-250 border-right-1 h-100 border-gray-i shadow">
      <div appFlex direction="column" [gap]="25" class="list-style-none">
        @for(link of sidebarLinks; track $index){
        <span class="regular text-bold">
          <a class="text-decor-none text-dark" [routerLink]="link.path">{{
            link.name
          }}</a>
        </span>
        }
      </div>
    </aside>
  `,
  standalone: true,
  imports: [CommonModule, FlexDirective, RouterLink],
})
export class SidebarComponent {
  public sidebarLinks = sidebarLinks;
}
