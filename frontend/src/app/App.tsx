import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../widgets/navbar";
import { Sidebar } from "../widgets/sidebar";

function App() {
  const [isOpenSidebar, setOpenSidebar] = useState(true);

  return (
    <ChakraProvider>
      <Navbar openSidebar={() => setOpenSidebar(!isOpenSidebar)} />
      <main className="flex gap-24">
        <Sidebar isOpen={isOpenSidebar} />
        <Outlet />
      </main>
    </ChakraProvider>
  );
}

export default App;
