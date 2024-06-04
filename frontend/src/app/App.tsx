import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Navbar } from "../widgets/navbar";
import { Sidebar } from "../widgets/sidebar";

function App() {
  const [isOpenSidebar, setOpenSidebar] = useState(true);

  return (
    <ChakraProvider>
      <Navbar openSidebar={() => setOpenSidebar(!isOpenSidebar)} />
      <main className="flex gap-24">
        <Sidebar isOpen={isOpenSidebar} />
        <section></section>
      </main>
    </ChakraProvider>
  );
}

export default App;
