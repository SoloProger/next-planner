import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FaChartSimple,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaList,
  FaPlus,
} from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";
import AddCategoryForm from "../features/add-category/ui/AddCategoryForm";
import AddGoalForm from "../features/add-goal/ui/AddGoalForm";
import { AddInvoiceForm } from "../features/add-invoice";
import AddRecordForm from "../features/add-record/ui/AddRecordForm";
import { Navbar } from "../widgets/navbar";
import { Sidebar } from "../widgets/sidebar";

function App() {
  const [isOpenSidebar, setOpenSidebar] = useState(true);
  const [isShow, setShow] = useState(false);
  const [form, setForm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const forms: { [key: string]: any } = {
    invoiceForm: AddInvoiceForm,
    goalForm: AddGoalForm,
    categoryForm: AddCategoryForm,
    recordForm: AddRecordForm,
  };

  function renderForm(): JSX.Element {
    const Form = forms[form];
    return <Form close={onClose}></Form>;
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
    }
  }, []);

  return (
    <>
      <Navbar openSidebar={() => setOpenSidebar(!isOpenSidebar)} />
      <main className="flex gap-24 relative h-vh-100">
        <Sidebar isOpen={isOpenSidebar} />
        <Outlet />
        <div
          className="absolute b-135 r-80 bg-orange p-16 border-circle pointer"
          onClick={() => setShow(!isShow)}
        >
          <FaPlus size="24px" />
        </div>

        <>
          <div
            className={`trans-1 absolute b-90 r-135 bg-orange p-16 border-circle pointer ${
              isShow ? "opacity" : "opacity-none"
            }`}
            onClick={() => {
              onOpen();
              setForm("categoryForm");
            }}
          >
            <FaList />
          </div>
          <div
            className={`trans-1  absolute b-140 r-150 bg-orange p-16 border-circle pointer ${
              isShow ? "opacity" : "opacity-none"
            }`}
            onClick={() => {
              onOpen();
              setForm("goalForm");
            }}
          >
            <FaChartSimple />
          </div>
          <div
            className={`trans-1  absolute b-190 r-130 bg-orange p-16 border-circle pointer ${
              isShow ? "opacity" : "opacity-none"
            }`}
            onClick={() => {
              onOpen();
              setForm("recordForm");
            }}
          >
            <FaFileInvoiceDollar />
          </div>
          <div
            className={`trans-1  absolute b-220 r-85 bg-orange p-16 border-circle pointer ${
              isShow ? "opacity" : "opacity-none"
            }`}
            onClick={() => {
              onOpen();
              setForm("invoiceForm");
            }}
          >
            <FaCreditCard />
          </div>
        </>
      </main>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{renderForm()}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
