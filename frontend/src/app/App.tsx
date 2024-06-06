import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaChartSimple,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaList,
  FaPlus,
} from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { Navbar } from "../widgets/navbar";
import { Sidebar } from "../widgets/sidebar";

function App() {
  const [isOpenSidebar, setOpenSidebar] = useState(true);
  const [isShow, setShow] = useState(false);

  return (
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
          >
            <FaCreditCard />
          </div>
        </>
      </main>
    </ChakraProvider>
  );
}

export default App;
