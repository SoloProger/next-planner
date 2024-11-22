import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {KeyValuePipe, NgClass, NgIf} from "@angular/common";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

enum FormValidationMessages {
  required = 'Обязательное поле',
  minlength = 'Минимальная длина',
  maxlength = 'Максимальная длина',
  email = 'Некорректный email',
}

@Component({
  selector: 'app-input',
  template: `
    <div [class]="'flex-col gap-8 ' + blockStyles">
      @if (label) {
        <label class="headline">{{ label }}</label>
      }
      <input
        [class]="'border-stroke border-1 border-radius-15 bg text-color input p-x-16 ' + inputStyle "
        [ngClass]="{'p-y-16 ': inputSize === 'small', 'p-y-20': inputSize === 'regular', 'text-danger border-danger-i': validation?.invalid}"
        [placeholder]="placeholder"
        [type]="type"
        [value]="inputFormValue"
        (input)="update($event)"
      />
    </div>
    @if (validation?.invalid) {
      <div>
        @for (error of validation.errors | keyvalue; track error) {
          <span
            class="text-danger caption-4 mt-2"
          >
          {{ getErrorMessage(error) }}
          </span>
        }
      </div>
    }
  `,
  styles: [`
    .input {
      &:focus {
        outline: none;
      }
    }

  `],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgClass, KeyValuePipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})

export class InputComponent implements ControlValueAccessor {

  @Input() blockStyles: string = "";

  @Input() inputStyle: string = "";

  @Input() label?: string;

  @Input() inputSize: string = 'regular';

  @Input() type: string = 'text';

  @Input() placeholder: string = "";

  @Input()
  public validation?: any;

  public inputFormValue: string = '';

  public onChange = (inputFormValue: string) => {
  };

  public onTouched = () => {
  };

  public touched = false;

  public disabled = false;

  public writeValue(inputFormValue: string): void {
    this.inputFormValue = inputFormValue;
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public update(event: Event): void {
    const inputFormValue = (event.target as HTMLInputElement).value;
    this.inputFormValue = inputFormValue;
    this.onChange(inputFormValue);
    this.onTouched();
  }

  public getErrorMessage(error: unknown) {
    const errorMessage =
      FormValidationMessages[
        (error as { key: string }).key as keyof typeof FormValidationMessages
        ];

    if (
      (error as { key: string }).key === 'minlength' ||
      (error as { key: string }).key === 'maxlength'
    ) {
      return `${errorMessage}: ${
        (error as { key: string; value: any }).value?.requiredLength
      }`;
    }

    return errorMessage;
  }

}
