import { Component, computed, input } from '@angular/core';
import { currencySymbols } from '../../constants/currencySymbols';

@Component({
  selector: 'app-invoice-detail-navbar',
  templateUrl: 'invoice-detail-navbar.component.html',
})
export class InvoiceDetailNavbarComponent {
  public invoiceName = input<string>();
  public invoiceCreatedDate = input<string>();
  public invoiceNumber = input<number>();
  public invoiceCurrency = input<string>();
  public balance = input<number>();

  protected readonly currencySymbols: Record<string, string> = currencySymbols;

  public createDate = computed(() =>
    new Date(this.invoiceCreatedDate() as string).toLocaleDateString('ru-RU')
  );

  public currencySymbol = computed(
    () => this.currencySymbols[this.invoiceCurrency() as string]
  );
}
