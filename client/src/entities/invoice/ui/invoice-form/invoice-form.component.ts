import {Component, inject} from '@angular/core';
import {Currency, CurrencyEnumType} from "../../../../shared/model/enums/Currency";
import {InvoiceType, InvoiceTypeEnum} from "../../model/types/InvoiceType";
import {FormGroup, Validators} from "@angular/forms";
import invoiceNumGen from "../../lib/utils/invoiceNumGen";
import {Option} from "../../../../shared/ui/select/model/types/option";
import {CustomFormBuilder} from "../../../../shared/lib/services/custom-form-builder.service";
import {BaseStrapiApiService} from "../../../../shared/api/services/base-strapi-api.service";

@Component({
  selector: 'app-invoice-form',
  templateUrl: 'invoice-form.component.html'
})
export class InvoiceFormComponent {

  public fb = inject(CustomFormBuilder);
  private api = inject(BaseStrapiApiService);

  public currencies: Option[] = [{
    name: Currency.RUBLE,
    value: CurrencyEnumType.RUBLE
  }, {name: Currency.EURO, value: CurrencyEnumType.EURO}, {name: Currency.DOLLAR, value: CurrencyEnumType.DOLLAR}];

  public invoiceTypes: Option[] = [
    {name: InvoiceType.MAIN, value: InvoiceTypeEnum.MAIN},
    {name: InvoiceType.INVEST, value: InvoiceTypeEnum.INVEST},
    {name: InvoiceType.SAVINGS, value: InvoiceTypeEnum.SAVINGS},
  ]

  public formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    currency: ['', Validators.required],
    invoiceType: ['', Validators.required],
    invoiceCount: ['', Validators.required],
    invoiceNumber: [invoiceNumGen(), Validators.required],
  });

  public onSubmit() {
    this.api.post('invoices', {data: this.formGroup.value}).subscribe()
  }
}
