import {NgModule} from '@angular/core';
import {CommonModule, SlicePipe} from "@angular/common";
import {InvoiceGridComponent} from "./ui/invoice-grid/invoice-grid.component";
import {InvoiceCardComponent} from "./ui/invoice-card/invoice-card.component";


@NgModule({
  imports: [CommonModule, SlicePipe],
  exports: [InvoiceGridComponent],
  declarations: [InvoiceGridComponent, InvoiceCardComponent],
})
export class InvoiceModule {
}
