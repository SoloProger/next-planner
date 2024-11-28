import { booleanAttribute, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tab',
  template: `
    <div class="pointer" [ngClass]="{ 'active-tab': activeTab() }">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .active-tab::after {
        content: '';
        display: flex;
        border: 1px solid #262626;
      }
    `,
  ],
  standalone: true,
  imports: [NgClass],
})
export class TabComponent {
  public activeTab = input(false, { transform: booleanAttribute });
}
