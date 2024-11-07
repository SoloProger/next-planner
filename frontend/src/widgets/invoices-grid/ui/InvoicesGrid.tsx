import {useQuery} from "@tanstack/react-query";
import {getInvoices, InvoiceCard} from "../../../entities/invoice";
import {ReactNode} from "react";

interface InvoicesGridProps {
    children?: ReactNode | ReactNode[];
}

function InvoicesGrid({children}: InvoicesGridProps) {
    const {data} = useQuery({
        queryKey: ["invoices"],
        queryFn: () => getInvoices(),
    });

    return (
        <section className="flex ai-center gap-27 wrap">
            {data?.data.map((invoice, idx) => (
                <InvoiceCard
                    key={idx}
                    invoiceNumber={invoice.attributes.invoiceNumber}
                    invoiceCount={invoice.attributes.invoiceCount}
                    invoiceType={invoice.attributes.invoiceType}
                    currency={invoice.attributes.currency}
                    name={invoice.attributes.name}
                />
            ))}
            {children}
        </section>
    );
}

export default InvoicesGrid;
