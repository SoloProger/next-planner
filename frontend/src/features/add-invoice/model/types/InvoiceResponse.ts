import { Invoice } from "../../../../entities/invoice";

export interface InvoiceResponse {
  data: {
    id: number;
    attributes: Omit<Invoice, "id">;
  };
  meta: unknown;
}
