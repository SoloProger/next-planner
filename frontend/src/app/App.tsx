import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../shared/ui";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
