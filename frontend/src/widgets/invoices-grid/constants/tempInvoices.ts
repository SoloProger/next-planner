import { Invoice, InvoiceType } from "../../../entities/invoice";
import { Currency } from "../../../shared/model/enums/Currency";

export const tempInvoices: Invoice[] = [
  {
    invoiceNumber: 123046446945594,
    currency: Currency.DOLLAR,
    invoiceCount: 100,
    invoiceType: InvoiceType.INVEST,
  },
  {
    invoiceNumber: 123046446355594,
    currency: Currency.RUBLE,
    invoiceCount: 25000,
    invoiceType: InvoiceType.MAIN,
  },
  {
    invoiceNumber: 123045466945594,
    currency: Currency.RUBLE,
    invoiceCount: 10000,
    invoiceType: InvoiceType.SAVINGS,
  },
];
