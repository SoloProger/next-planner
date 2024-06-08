import { Invoice } from "../../../../entities/invoice";

export interface InvoiceRequest {
  data: Omit<Invoice, "id">;
}
