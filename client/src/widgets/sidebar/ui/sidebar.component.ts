import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sidebarLinks } from '../constants/sidebarLinks';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="p-24">
      <section class="wp-210 hp-550 p-20 shadow bg-white border-radius-5">
        <div class="flex-col gap-24">
          @for (link of links; track link.path) {
            <a
              [routerLink]="link.path"
              class="link-reset flex svg-fill-hover ai-center gap-8 pointer bg-black-hover text-white-hover border-radius-8-hover p-8"
            >
              <!--              <img [src]="'/img/' + link.iconName + '.svg'" alt="icon" />-->
              {{ link.name }}
            </a>
          }
        </div>
      </section>
    </aside>
  `,
  imports: [RouterModule],
})
export class SidebarComponent {
  public links = sidebarLinks;
}
