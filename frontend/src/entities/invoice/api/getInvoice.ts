import axios from "axios";
import { InvoiceResponseArr } from "../../../features/add-invoice/model/types/InvoiceResponse";
import { API_URL } from "../../../shared/constants/apiUrl";

export async function getInvoices(id: number): Promise<InvoiceResponseArr> {
  const invoices = await axios.get<InvoiceResponseArr>(
    `${API_URL}/invoices/${id}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NzQ4MjcxLCJleHAiOjE3MjAzNDAyNzF9.z8DYpTNuAc3Up6-Oa-wGtqAKk0hAFIwaLBjf5w2gqLU",
      },
    }
  );

  return invoices.data;
}
