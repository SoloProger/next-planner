import {
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaChartSimple,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaList,
  FaPlus,
} from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { AddInvoiceForm } from "../features/add-invoice";
import { Navbar } from "../widgets/navbar";
import { Sidebar } from "../widgets/sidebar";
import CustomQueryClientProvider from "./providers/CustomQueryClientProvider";

function App() {
  const [isOpenSidebar, setOpenSidebar] = useState(true);
  const [isShow, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CustomQueryClientProvider>
      <ChakraProvider>
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
            >
              <FaList />
            </div>
            <div
              className={`trans-1  absolute b-140 r-150 bg-orange p-16 border-circle pointer ${
                isShow ? "opacity" : "opacity-none"
              }`}
            >
              <FaChartSimple />
            </div>
            <div
              className={`trans-1  absolute b-190 r-130 bg-orange p-16 border-circle pointer ${
                isShow ? "opacity" : "opacity-none"
              }`}
            >
              <FaFileInvoiceDollar />
            </div>
            <div
              className={`trans-1  absolute b-220 r-85 bg-orange p-16 border-circle pointer ${
                isShow ? "opacity" : "opacity-none"
              }`}
              onClick={onOpen}
            >
              <FaCreditCard />
            </div>
          </>
        </main>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddInvoiceForm close={onClose}></AddInvoiceForm>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </CustomQueryClientProvider>
  );
}

export default App;
