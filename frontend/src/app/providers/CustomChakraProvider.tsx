import { ChakraProvider } from "@chakra-ui/react";
import { ReactChildren } from "../../shared/model/types/ReactChildren";

function CustomChakraProvider({ children }: ReactChildren) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default CustomChakraProvider;
