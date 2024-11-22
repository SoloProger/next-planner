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
  exports: [InvoiceGridComponent, InvoiceFormComponent],
  declarations: [
    InvoiceGridComponent,
    InvoiceCardComponent,
    InvoiceFormComponent,
  ],
})
export class InvoiceModule {}
