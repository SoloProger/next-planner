import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';
import { sidebarLinks } from './sidebar-links';

@Component({
  selector: 'app-sidebar',
  template: `
    <aside
      class="p-28 w-100 max-wp-250 border-right-1 h-100 border-gray-i shadow fixed t-84"
    >
      <div appFlex direction="column" [gap]="25" class="list-style-none">
        @for(link of sidebarLinks; track $index){
        <span appFlex [gap]="10" extraStyles="regular text-bold">
          <i [class]="'pi ' + link.icon"></i>
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
