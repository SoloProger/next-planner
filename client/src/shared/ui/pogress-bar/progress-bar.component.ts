import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="flex-col gap-8">
      <div class="bg-stroke border-radius-12">
        <div
          class="hp-12 wp-0 border-radius-12"
          [ngClass]="color()"
          [ngStyle]="{ width: updateProgress() + '%' }"></div>
      </div>
      @if (withViewValues()) {
        <div class="caption-4 flex ai-center jc-space">
          <span>{{ progress() }}</span>
          <span>{{ total() }}</span>
        </div>
      }
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgStyle],
})
export class ProgressBarComponent {
  public progress = input.required<number>();
  public total = input.required<number>();
  public color = input.required<string>();
  public withViewValues = input(false, {
    transform: booleanAttribute,
  });

  public updateProgress = computed(
    () => (this.progress() / this.total()) * 100
  );
}
