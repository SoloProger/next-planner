import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  template: `
    <section class="flex-col gap-34 mt-24 p-24 w-100 bg-white border-radius-8">
      <h1 class="subtitle-2">{{ title }}</h1>
      <ng-content></ng-content>
    </section>
  `
})

export class PageLayoutComponent {
  @Input({required: true}) title!: string;
}
