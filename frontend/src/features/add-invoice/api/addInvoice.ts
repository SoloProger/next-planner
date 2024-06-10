import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { InvoiceRequest } from "../model/types/InvoiceRequest";
import { InvoiceResponse } from "../model/types/InvoiceResponse";

export async function addInvoice(
  requestBody: InvoiceRequest
): Promise<InvoiceResponse> {
  const invoice = await axios.post<InvoiceResponse>(
    `${API_URL}/invoices`,
    requestBody,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NzQ4MjcxLCJleHAiOjE3MjAzNDAyNzF9.z8DYpTNuAc3Up6-Oa-wGtqAKk0hAFIwaLBjf5w2gqLU",
      },
    }
  );
  return invoice.data;
}
