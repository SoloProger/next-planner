import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AlignItems, Direction, JustifyContent, Wrap } from './flex.types';

@Directive({
  selector: '[appFlex]',
  standalone: true,
})
export class FlexDirective implements OnInit {
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

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.className = this.setStyles();
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
