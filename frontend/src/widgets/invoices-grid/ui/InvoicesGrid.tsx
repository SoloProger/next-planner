import { InvoiceCard } from "../../../entities/invoice";
import { tempInvoices } from "../constants/tempInvoices";

function InvoicesGrid() {
  return (
    <section className="flex gap-18 w-100">
      {tempInvoices.map((invoice, idx) => (
        <InvoiceCard
          key={idx}
          invoiceNumber={invoice.invoiceNumber}
          invoiceCount={invoice.invoiceCount}
          invoiceType={invoice.invoiceType}
          currency={invoice.currency}
        />
      ))}
    </section>
  );
}

export default InvoicesGrid;
