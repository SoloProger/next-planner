import {Component, OnInit} from '@angular/core';
import {PageLayoutComponent} from "../widgets/layouts/page-layout/ui/page-layout.component";
import {InvoiceModule} from "../entities/invoice/invoice.module";

@Component({
  selector: 'invoice-page',
  standalone: true,
  imports: [
    PageLayoutComponent,
    InvoiceModule
  ],
  template: `
    <app-page-layout title="Счет">
      <app-invoice-grid></app-invoice-grid>
    </app-page-layout>
  `
})

export class InvoicePageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
