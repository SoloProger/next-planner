import { Component, inject, OnInit, signal } from '@angular/core';
import { InvoiceModule } from '../entities/invoice/invoice.module';
import { ActivatedRoute } from '@angular/router';
import { PageLayoutComponent } from '../widgets/layouts/page-layout/ui/page-layout.component';
import { BaseStrapiApiService } from '../shared/api/services/base-strapi-api.service';
import { Invoice } from '../entities/invoice/model/types/Invoice';
import { EntityDataModel } from '../shared/model/types/EntityDataModel';

@Component({
  selector: 'app-invoice-detail-page',
  template: `
    <app-page-layout title="">
      <app-invoice-detail-navbar
        [invoiceName]="invoice()?.name"
        [invoiceNumber]="invoice()?.invoiceNumber"
        [invoiceCreatedDate]="invoice()?.createdAt"
        [balance]="invoice()?.invoiceCount"
        [invoiceCurrency]="invoice()?.currency">
      </app-invoice-detail-navbar>
    </app-page-layout>
  `,
  standalone: true,
  imports: [InvoiceModule, PageLayoutComponent],
})
export class InvoiceDetailPageComponent implements OnInit {
  public route = inject(ActivatedRoute);
  public api: BaseStrapiApiService<Invoice, Invoice> =
    inject(BaseStrapiApiService);

  public invoice = signal<Invoice | null>(null);

  ngOnInit(): void {
    this.api
      .getOne('invoices', this.route.snapshot.params['id'])
      .subscribe(invoice => {
        const _invoice = invoice as unknown as {
          data: EntityDataModel<Invoice>;
        };
        this.invoice.set(_invoice.data.attributes);
      });
  }
}
