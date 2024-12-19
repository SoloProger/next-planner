import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../model/types/Invoice';
import { BehaviorSubject } from 'rxjs';
import { BaseApiService } from '../../../../shared/api/services/base-api.service';

@Component({
  selector: 'app-invoice-grid',
  template: `
    <section class="flex ai-center gap-27 wrap">
      @for (invoice of invoices | async; track invoice.id) {
        <app-invoice-card
          [invoiceCount]="invoice.invoiceCount"
          [invoiceNumber]="invoice.invoiceNumber"
          [invoiceType]="invoice.invoiceType"
          [name]="invoice.name"
          [currency]="invoice.currency"></app-invoice-card>
      }
      <ng-content></ng-content>
    </section>
  `,
})
export class InvoiceGridComponent implements OnInit {
  public invoices: BehaviorSubject<Invoice[]> = new BehaviorSubject<Invoice[]>(
    []
  );

  constructor(private apiService: BaseApiService<Invoice, Invoice>) {}

  ngOnInit() {
    this.apiService.getAll('invoice').subscribe(invoices => {
      this.invoices.next(invoices);
    });
  }
}
