import EntityModal, {FormType} from "./EntityModal.tsx";
import {useDisclosure} from "@chakra-ui/react";
import AddEntityBtn from "./AddEntityBtn.tsx";

type AddEntityProps = { formType: FormType };

function AddEntity(props: AddEntityProps) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <AddEntityBtn onOpen={onOpen}></AddEntityBtn>
            <EntityModal form={props.formType} isOpen={isOpen} onClose={onClose}></EntityModal>
        </>
    );
}

export default AddEntity;
