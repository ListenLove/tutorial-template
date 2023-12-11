import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import DataVision from "../pages/data-vision";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    title: "Home",
    children: [
      {
        index: true,
        title: "Home",
        element: <div>This is Home Page</div>,
      },
      {
        path: "/data-vision",
        element: <DataVision />,
        title: "Data Vision",
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
