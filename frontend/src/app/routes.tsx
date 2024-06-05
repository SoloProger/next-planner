import { createBrowserRouter, Navigate } from "react-router-dom";
import DetailRecordPage from "../pages/DetailRecordPage";
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
      {
        path: "history",
        element: <HistoryPage />,
      },
      { path: "detail-record/:id", element: <DetailRecordPage /> },
    ],
  },
]);

export default router;
