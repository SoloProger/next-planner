import {Component, OnInit} from '@angular/core';
import {Invoice} from "../../model/types/Invoice";
import {BehaviorSubject} from "rxjs";
import {BaseStrapiApiService} from "../../../../shared/api/services/base-strapi-api.service";
import {EntityDataModel} from "../../../../shared/model/types/EntityDataModel";

@Component({
  selector: 'app-invoice-grid',
  template: `

    <section class="flex ai-center gap-27 wrap">
      @for (invoice of invoices | async; track invoice.id) {
        <app-invoice-card
          [invoiceCount]="invoice.attributes.invoiceCount"
          [invoiceNumber]="invoice.attributes.invoiceNumber"
          [invoiceType]="invoice.attributes.invoiceType"
          [name]="invoice.attributes.name"
          [currency]="invoice.attributes.currency"
        ></app-invoice-card>
      }
    </section>

  `
})

export class InvoiceGridComponent implements OnInit {

  public invoices: BehaviorSubject<EntityDataModel<Invoice>[]> = new BehaviorSubject<EntityDataModel<Invoice>[]>([]);

  constructor(private apiService: BaseStrapiApiService<Invoice, Invoice>) {
  }

  ngOnInit() {
    this.apiService.getAll('invoices').subscribe((invoices) => {
      this.invoices.next(invoices.data)
    })
  }
}
