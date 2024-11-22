import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Option} from '../../model/types/option';
import {NgClass} from "@angular/common";
import {OutsideClickDirective} from "../../../../lib/directives/outside-click.directive";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
  imports: [
    NgClass,
    OutsideClickDirective
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input({required: true})
  public options!: Option[];

  @Input({required: true})
  public label!: string;

  @Input() valueMapperField?: string;

  @Input()
  public emptyMessage?: string;

  @Input()
  public placeholder: string = 'Выберите';

  @Input()
  public labelOut?: string


  public open: boolean = false;

  public selected: string = '';

  public onChange = (selected: string) => {
  };

  public onTouched = () => {
  };

  public disabled = false;

  public writeValue(selected: string): void {
    this.selected = selected;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public selectValue(option: any) {
    this.selected = option[this.label];
    this.open = false;
    if (this.valueMapperField) {
      this.onChange(option[this.valueMapperField]);
    } else {
      this.onChange(option[this.label]);
    }
    this.onTouched();
  }

  public openCloseSelect() {
    this.open = !this.open;
  }
}
