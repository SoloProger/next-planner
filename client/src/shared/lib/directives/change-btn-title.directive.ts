import {
  booleanAttribute,
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[appChangeBtnTitle]', standalone: true })
export class ChangeBtnTitleDirective implements OnInit {
  private renderer: Renderer2 = inject(Renderer2);
  private element: ElementRef = inject(ElementRef);

  public isEdit = input(false, { transform: booleanAttribute });

  ngOnInit(): void {
    this.renderer.appendChild(
      this.element.nativeElement.children[0],
      this.renderer.createText(!this.isEdit() ? 'Добавить' : 'Изменить')
    );
  }
}
