import { createBrowserRouter, Navigate } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage";
import InvoicePage from "../pages/InvoicePage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/invoice" replace /> },
      { path: "invoice", element: <InvoicePage /> },
      { path: "history", element: <HistoryPage /> },
    ],
  },
]);

export default router;
