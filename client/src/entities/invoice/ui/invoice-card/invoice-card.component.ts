import { Component, input, Input, output } from '@angular/core';
import { currencySymbols } from '../../constants/currencySymbols';
import { backgrounds } from '../../constants/cardBackgrounds';

@Component({
  selector: 'app-invoice-card',
  template: `
    <div
      class="p-16 border-radius-2 wp-200 hp-150 flex-col border-radius-8 gap-8"
      [ngClass]="backgrounds[invoiceType()]">
      <div class="flex gap-50">
        <h3 class="caption-3">№{{ invoiceNumber() }}</h3>
        <div>
          <img src="img/editer.svg" alt="" (click)="enterEdit.emit()" />
        </div>
      </div>
      <h2 class="subtitle-2">{{ name() | slice: 0 : 10 }}...</h2>
      <div class="caption-2">
        Текущий баланс:
        <span class="headline"
          >{{ invoiceCount() }}{{ currencySymbols[currency()] }}</span
        >
      </div>
    </div>
  `,
})
export class InvoiceCardComponent {
  public invoiceNumber = input.required<number>();

  public invoiceCount = input.required<number>();

  public currency = input.required<string>();

  public name = input.required<string>();

  public invoiceType = input.required<string>();

  public enterEdit = output();

  protected readonly currencySymbols: Record<string, string> = currencySymbols;
  protected readonly backgrounds: Record<string, string> = backgrounds;
}
