import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import AddInvoiceForm from "../../add-invoice";
import AddGoalForm from "../../add-goal/ui/AddGoalForm.tsx";
import AddCategoryForm from "../../add-category/ui/AddCategoryForm.tsx";
import AddRecordForm from "../../add-record/ui/AddRecordForm.tsx";


interface EntityModalProps {
    form: FormType;
    isOpen: boolean;
    onClose: () => void;
}

export type FormType = "invoiceForm" | "goalForm" | "categoryForm" | "recordForm";

function EntityModal(props: EntityModalProps): JSX.Element {

    const forms: { [key: string]: any } = {
        invoiceForm: AddInvoiceForm,
        goalForm: AddGoalForm,
        categoryForm: AddCategoryForm,
        recordForm: AddRecordForm,
    };

    function renderForm(): JSX.Element {
        const Form = forms[props.form];
        return <Form close={props.onClose}></Form>;
    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Добавить</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>{renderForm()}</ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default EntityModal;
