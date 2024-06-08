import { create } from "zustand";
import { InvoiceStore } from "../types/InvoiceStore";

export const useInvoiceStore = create<InvoiceStore>()((set) => ({
  invoices: [],
  addInvoiceToStore: (invoice) =>
    set((state) => ({ invoices: [...state.invoices, invoice] })),
}));
