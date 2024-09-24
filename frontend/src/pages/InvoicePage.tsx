import InvoicesGrid from "../widgets/invoices-grid/ui/InvoicesGrid";
import PageLayout from "../widgets/layouts/ui/PageLayout";
import AddEntity from "../features/add-entity";


function InvoicePage() {


    return (
        <PageLayout title="Счет">
            <InvoicesGrid/>
            <AddEntity formType="invoiceForm"></AddEntity>
        </PageLayout>
    );
}

export default InvoicePage;
