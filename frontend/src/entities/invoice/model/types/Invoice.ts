import { CurrencyEnumType } from "../../../../shared/model/enums/Currency";
import { InvoiceTypeEnum } from "./InvoiceType";

export interface Invoice {
  name?: string;
  invoiceNumber: number;
  currency: CurrencyEnumType;
  invoiceCount: number;
  invoiceType: InvoiceTypeEnum;
}
