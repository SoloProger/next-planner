import PageLayout from "../widgets/layouts/ui/PageLayout";
import PlanningGrid from "../widgets/planning/ui/PlanningGrid";
import AddEntity from "../features/add-entity";

function PlanningPage() {
    return (
        <PageLayout title="Планирование">
            <PlanningGrid/>
            <AddEntity formType="goalForm"></AddEntity>
        </PageLayout>
    );
}

export default PlanningPage;
