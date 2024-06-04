import InvoicesGrid from "../widgets/invoices-grid/ui/InvoicesGrid";
import PageLayout from "../widgets/layouts/ui/PageLayout";

function InvoicePage() {
  return (
    <PageLayout title="Счет">
      <InvoicesGrid />
    </PageLayout>
  );
}

export default InvoicePage;
