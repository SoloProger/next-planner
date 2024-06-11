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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return invoice.data;
}
