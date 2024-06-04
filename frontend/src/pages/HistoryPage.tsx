import HistoryRecordsTable from "../widgets/history-records/ui/HistoryRecordsTable";
import PageLayout from "../widgets/layouts/ui/PageLayout";

function HistoryPage() {
  return (
    <PageLayout title="История записей">
      <HistoryRecordsTable />
    </PageLayout>
  );
}

export default HistoryPage;
