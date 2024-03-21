import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Splash from "./pages/Splash";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./components/FavoritesProvider";
import Callback from "./pages/Callback";
import AuthenticationGuard from "./components/AuthenticationGuard";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";

const router = createBrowserRouter([
  {
    element: <Auth0ProviderWithNavigate />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Splash />
      },
      {
        element: <AuthenticationGuard component={FavoritesProvider} />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: "/callback",
                element: <Callback />
              },
              {
                path: "/search",
                element: <Search />
              },
              {
                path: "/favorites",
                element: <Favorites />
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
