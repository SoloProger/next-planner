import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { InvoiceGridComponent } from './ui/invoice-grid/invoice-grid.component';
import { InvoiceCardComponent } from './ui/invoice-card/invoice-card.component';
import { DialogModule } from '../../shared/ui/dialog/dialog.module';
import { InvoiceFormComponent } from './ui/invoice-form/invoice-form.component';
import { SelectComponent } from '../../shared/ui/select/ui/select/select.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceDetailNavbarComponent } from './ui/invoice-detail-navbar/invoice-detail-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SlicePipe,
    DialogModule,
    SelectComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  exports: [
    InvoiceGridComponent,
    InvoiceFormComponent,
    InvoiceDetailNavbarComponent,
  ],
  declarations: [
    InvoiceGridComponent,
    InvoiceCardComponent,
    InvoiceFormComponent,
    InvoiceDetailNavbarComponent,
  ],
})
export class InvoiceModule {}
