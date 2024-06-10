import { useQuery } from "@tanstack/react-query";
import { getInvoices, InvoiceCard } from "../../../entities/invoice";

function InvoicesGrid() {
  const { data } = useQuery({
    queryKey: ["invoices"],
    queryFn: () => getInvoices(),
  });

  return (
    <section className="grid col-3 gap-18">
      {data?.data.map((invoice, idx) => (
        <InvoiceCard
          key={idx}
          invoiceNumber={invoice.attributes.invoiceNumber}
          invoiceCount={invoice.attributes.invoiceCount}
          invoiceType={invoice.attributes.invoiceType}
          currency={invoice.attributes.currency}
        />
      ))}
    </section>
  );
}

export default InvoicesGrid;
