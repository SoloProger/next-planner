import { Component, inject } from '@angular/core';
import { Currency } from '../../../../shared/model/enums/Currency';
import { InvoiceType } from '../../model/types/InvoiceType';
import { FormGroup, Validators } from '@angular/forms';
import invoiceNumGen from '../../lib/utils/invoiceNumGen';
import { Option } from '../../../../shared/ui/select/model/types/option';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { BaseApiService } from '../../../../shared/api/services/base-api.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: 'invoice-form.component.html',
})
export class InvoiceFormComponent {
  public fb = inject(CustomFormBuilder);
  private api = inject(BaseApiService);

  public currencies: Option[] = [
    { name: Currency.RUBLE, value: Currency.RUBLE },
    { name: Currency.EURO, value: Currency.EURO },
    { name: Currency.DOLLAR, value: Currency.DOLLAR },
  ];

  public invoiceTypes: Option[] = [
    { name: InvoiceType.MAIN, value: InvoiceType.MAIN },
    { name: InvoiceType.INVEST, value: InvoiceType.INVEST },
    { name: InvoiceType.SAVINGS, value: InvoiceType.SAVINGS },
  ];

  public formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    currency: ['', Validators.required],
    invoiceType: ['', Validators.required],
    invoiceCount: ['', Validators.required],
    invoiceNumber: [invoiceNumGen(), Validators.required],
  });

  public onSubmit() {
    this.api.post('invoice', this.formGroup.value).subscribe();
  }
}
