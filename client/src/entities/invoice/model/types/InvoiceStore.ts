import { Invoice } from './Invoice';

export interface InvoiceStore {
  invoices: Invoice[];
  addInvoiceToStore: (invoice: Invoice) => void;
}
