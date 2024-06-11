import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CustomQueryClientProvider from "./providers/CustomQueryClientProvider.tsx";
import router from "./routes.tsx";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomQueryClientProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </CustomQueryClientProvider>
  </React.StrictMode>
);
