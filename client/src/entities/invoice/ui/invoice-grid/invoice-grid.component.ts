import { Component, inject, OnInit, signal } from '@angular/core';
import { Invoice } from '../../model/types/Invoice';
import { BaseStrapiApiService } from '../../../../shared/api/services/base-strapi-api.service';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-grid',
  template: `
    <section class="flex ai-center gap-27 wrap">
      @for (invoice of invoices(); track invoice.id) {
        <app-invoice-card
          [invoiceCount]="invoice.attributes.invoiceCount"
          [invoiceNumber]="invoice.attributes.invoiceNumber"
          [invoiceType]="invoice.attributes.invoiceType"
          [name]="invoice.attributes.name"
          [currency]="invoice.attributes.currency"
          (click)="onNavigateToDetail(invoice.id)">
        </app-invoice-card>
      }
      <ng-content></ng-content>
    </section>
  `,
})
export class InvoiceGridComponent implements OnInit {
  public api: BaseStrapiApiService<Invoice, Invoice> =
    inject(BaseStrapiApiService);
  public router = inject(Router);

  public invoices = signal<EntityDataModel<Invoice>[]>([]);

  ngOnInit() {
    this.api.getAll('invoices').subscribe(invoices => {
      this.invoices.set(invoices.data);
    });
  }

  public onNavigateToDetail(id?: number): void {
    this.router.navigate([`/detail-invoice/${id}`]);
  }
}
