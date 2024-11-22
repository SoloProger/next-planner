import { Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { DialogService } from '../../../shared/ui/dialog/services/dialog.service';
import { InvoiceFormComponent } from '../../../entities/invoice/ui/invoice-form/invoice-form.component';
import { InvoiceModule } from '../../../entities/invoice/invoice.module';

@Component({
  selector: 'app-add-invoice',
  template: `
    <div
      class="p-16 border-radius-2 pointer wp-200 hp-150 flex ai-center jc-center border-radius-8 gap-8 bg-stroke"
      (click)="addInvoice()"
    >
      <img src="/img/add.svg" alt="icon" class="h-48 w-48" />
    </div>
  `,
  standalone: true,
  imports: [SlicePipe, InvoiceModule],
})
export class AddInvoiceComponent {
  constructor(private dialogService: DialogService) {}

  public addInvoice() {
    this.dialogService.openDialog(InvoiceFormComponent, {
      title: 'Добавить счет',
    });
  }
}
