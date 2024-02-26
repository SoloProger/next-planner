import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ngValueAccessorProvider } from '../../../app/providers/ng-value-accessor.provider';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [ngValueAccessorProvider(InputComponent)],
  imports: [CommonModule, ReactiveFormsModule],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() public formControl!: FormControl<string | null>;

  @Input() public placeholder: string = '';

  @Input() public type: 'text' | 'password' | 'email' = 'text';

  @Input()
  public formControlName!: string;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  constructor(private readonly controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (!this.formControl && this.controlContainer) {
      this.formControl = this.controlContainer.control?.get(
        this.formControlName
      ) as FormControl;
    }
  }

  public writeValue(outsideValue: string): void {
    this.formControl.patchValue(outsideValue);
  }

  public registerOnChange(fn: () => string): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
