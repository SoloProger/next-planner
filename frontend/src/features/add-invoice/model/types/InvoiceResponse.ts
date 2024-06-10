import { Invoice } from "../../../../entities/invoice";

export interface InvoiceResponse {
  data: {
    id: number;
    attributes: Omit<Invoice, "id">;
  };
  meta: unknown;
}

export interface InvoiceResponseArr {
  data: Array<{
    id: number;
    attributes: Omit<Invoice, "id">;
  }>;
  meta: unknown;
}
