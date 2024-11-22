import { Component } from '@angular/core';
import { PageLayoutComponent } from '../widgets/layouts/page-layout/ui/page-layout.component';
import { InvoiceModule } from '../entities/invoice/invoice.module';
import { AddInvoiceComponent } from '../features/add-invoice/ui/add-invoice.component';

@Component({
  selector: 'invoice-page',
  standalone: true,
  imports: [PageLayoutComponent, InvoiceModule, AddInvoiceComponent],
  template: `
    <app-page-layout title="Счет">
      <app-invoice-grid>
        <app-add-invoice></app-add-invoice>
      </app-invoice-grid>
    </app-page-layout>
  `,
})
export class InvoicePageComponent {}
