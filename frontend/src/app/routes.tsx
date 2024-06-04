import { createBrowserRouter } from "react-router-dom";
import InvoicePage from "../pages/InvoicePage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "invoice", element: <InvoicePage /> }],
  },
]);

export default router;
