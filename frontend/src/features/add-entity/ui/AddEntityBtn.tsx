import {FaPlus} from "react-icons/fa6";


interface AddEntityBtnProps {
    onOpen: () => void;
}

function AddEntityBtn(props: AddEntityBtnProps) {
    return (
        <div
            className="absolute b-135 r-80 bg-orange p-16 border-circle pointer"
            onClick={() => props.onOpen()}
        >
            <FaPlus size="24px"/>
        </div>
    );
}

export default AddEntityBtn;
