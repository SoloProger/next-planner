import HistoryRecordsTable from "../widgets/history-records/ui/HistoryRecordsTable";
import PageLayout from "../widgets/layouts/ui/PageLayout";
import AddEntity from "../features/add-entity";

function HistoryPage() {
    return (
        <PageLayout title="История записей">
            <HistoryRecordsTable/>
            <AddEntity formType="recordForm"></AddEntity>
        </PageLayout>
    );
}

export default HistoryPage;
