import { createHashRouter } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { Login } from "../Auth/Login";
import { ProtectedRoute, PublicOnlyRoute } from "./ProtectedRoutes";
import { WebLayout } from "../Components/WebLayout";

const routes = createHashRouter([
  // {
  //   path: "/",
  //   element: <PublicOnlyRoute element={<Login />} />,
  // },
  // {
  //   path: "/login",
  //   element: <PublicOnlyRoute element={<Login />} />,
  // },
  // {
  //   path: "/",
  //   element: <ProtectedRoute element={<Layout />} />,
  //   children: [
  //     {
  //       path: "dashboard",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "tickets",
  //       element: <Tickets />,
  //     },
  //     {
  //       path: "tickets-history",
  //       element: <TicketsHistory />,
  //     },
  //     {
  //       path: "create-sampling",
  //       element: <CreateSampling />,
  //     },
  //     {
  //       path: "pending-approvals",
  //       element: <PendingApprovals />,
  //     },
  //     {
  //       path: "reports",
  //       element: <Reports />,
  //     },
  //     {
  //       path: "sampling-requests",
  //       element: <SamplingRequests />,
  //     },
  //     {
  //       path: "approved-requests",
  //       element: <ApprovedRequests />,
  //     },
  //     {
  //       path: "completed-requests",
  //       element: <CompletedRequests />,
  //     },
  //     {
  //       path: "foh-reports",
  //       element: <FOHReports />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <PublicOnlyRoute element={<WebLayout />} />,
    children: [
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      // },
    ],
  },
]);

export default routes;
