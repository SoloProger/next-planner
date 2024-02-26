import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  AlignItems,
  Direction,
  JustifyContent,
  Wrap,
} from '../../../directives/flex/model/types';

@Component({
  selector: 'app-flex-layout',
  template: `<ng-container [class]="setStyles()">
    {{ debug(setStyles()) }}
    <ng-content></ng-content>
  </ng-container>`,
  standalone: true,
  imports: [CommonModule],
})
export class FlexLayoutComponent {
  @Input()
  public gap!: number;

  @Input()
  public justifyContent!: JustifyContent;

  @Input()
  public alignItems!: AlignItems;

  @Input()
  public extraStyles!: string;

  @Input()
  public direction: Direction = 'row';

  @Input()
  public wrap: Wrap = 'nowrap';

  public debug(v: any) {
    console.log(v);
  }

  public setStyles(): string {
    return `${this.setDirection()} ${this.wrap} jc-${this.justifyContent} ai-${
      this.alignItems
    } ${this.extraStyles}`;
  }

  private setDirection(): string {
    return this.direction === 'row'
      ? `flex ai-center gap-${this.gap}`
      : `flex-col gap-${this.gap}`;
  }
}
