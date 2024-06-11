import axios from "axios";
import { InvoiceResponseArr } from "../../../features/add-invoice/model/types/InvoiceResponse";
import { API_URL } from "../../../shared/constants/apiUrl";

export async function getInvoices(): Promise<InvoiceResponseArr> {
  const invoices = await axios.get<InvoiceResponseArr>(`${API_URL}/invoices`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return invoices.data;
}
