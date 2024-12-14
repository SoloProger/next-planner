import { booleanAttribute, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="p-19 border-radius-10 border-none w-100 text-white subtitle-3 pointer"
      [type]="type"
      [ngClass]="{ 'bg-text': disabled, 'bg-title': !disabled }"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  standalone: true,
  imports: [NgClass],
})
export class ButtonComponent {
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
}
