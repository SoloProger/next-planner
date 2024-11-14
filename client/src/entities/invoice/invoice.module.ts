import {NgModule} from '@angular/core';
import {CommonModule, SlicePipe} from "@angular/common";
import {InvoiceGridComponent} from "./ui/invoice-grid/invoice-grid.component";
import {InvoiceCardComponent} from "./ui/invoice-card/invoice-card.component";
import {DialogModule} from "../../shared/ui/dialog/dialog.module";
import {InvoiceFormComponent} from "./ui/invoice-form/invoice-form.component";


@NgModule({
  imports: [CommonModule, SlicePipe, DialogModule],
  exports: [InvoiceGridComponent, InvoiceFormComponent],
  declarations: [InvoiceGridComponent, InvoiceCardComponent, InvoiceFormComponent],
})
export class InvoiceModule {
}
