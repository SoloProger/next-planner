import { Currency } from "../../../../shared/model/enums/Currency";
import { InvoiceType } from "./InvoiceType";

export interface Invoice {
  id?: number;
  invoiceNumber: number;
  currency: Currency;
  invoiceCount: number;
  invoiceType: InvoiceType;
}
