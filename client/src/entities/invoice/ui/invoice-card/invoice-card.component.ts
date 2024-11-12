import {Component, Input} from '@angular/core';
import {currencySymbols} from "../../constants/currencySymbols";
import {backgrounds} from "../../constants/cardBackgrounds";

@Component({
  selector: 'app-invoice-card',
  template: `
    <div
      class='p-16 border-radius-2 wp-200 hp-150 flex-col border-radius-8 gap-8' [ngClass]="backgrounds[invoiceType]">
      <h3 class="caption-3">
        №{{ invoiceNumber }}
      </h3>
      <h2 class="subtitle-2">
        {{ name | slice: 0:10 }}...
      </h2>
      <div class="caption-2">
        Текущий баланс: <span class="headline">{{ invoiceCount }}{{ currencySymbols[currency] }}</span>
      </div>
    </div>
  `,
})

export class InvoiceCardComponent {

  @Input({required: true}) invoiceNumber!: number;

  @Input({required: true}) invoiceCount!: number;

  @Input({required: true}) currency!: string;

  @Input({required: true}) name!: string;

  @Input({required: true}) invoiceType!: string;

  protected readonly currencySymbols: { [key: string]: string } = currencySymbols;
  protected readonly backgrounds: { [key: string]: string } = backgrounds;

}
