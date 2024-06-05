import { useParams } from "react-router-dom";
import DetailRecord from "../entities/record/ui/DetailRecord";
import PageLayout from "../widgets/layouts/ui/PageLayout";

function DetailRecordPage() {
  const params = useParams();

  return (
    <PageLayout title={`Детали записи №${params.id}`}>
      <DetailRecord />
    </PageLayout>
  );
}

export default DetailRecordPage;
