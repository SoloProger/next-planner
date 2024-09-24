import {Categories} from "../widgets/categories";
import PageLayout from "../widgets/layouts/ui/PageLayout";
import AddEntity from "../features/add-entity";

function CategoriesPage() {
    return (
        <PageLayout title="Категории">
            <Categories/>
            <AddEntity formType="categoryForm"></AddEntity>
        </PageLayout>
    );
}

export default CategoriesPage;
