import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Search />,
        index: true,
      },{
        path: "/favorites",
        element: <Favorites />
      }
    ],
  },
]);

export default router;
