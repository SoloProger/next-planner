import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-input',
  template: `
    <div [class]="'flex-col gap-8 ' + blockStyles">
      @if (label) {
        <label class="headline">{{ label }}</label>
      }
      <input
        [class]="'border-stroke border-1 border-radius-15 bg text-color input p-x-16 ' + inputStyle "
        [type]="type"
        [placeholder]="placeholder"
        [ngClass]="{'p-y-16 ': inputSize === 'small', 'p-y-20': inputSize === 'regular'}"
      />
    </div>
  `,
  standalone: true,
  imports: [NgIf, NgClass],
  styles: [`
    .input {
      &:focus {
        outline: none;
      }
    }

  `]
})

export class InputComponent {

  @Input() blockStyles: string = "";

  @Input() inputStyle: string = "";

  @Input() label?: string;

  @Input() inputSize: string = 'regular';

  @Input() type: string = 'text';

  @Input() placeholder: string = "";

}
