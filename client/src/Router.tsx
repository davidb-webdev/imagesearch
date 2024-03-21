import { createBrowserRouter } from "react-router-dom";
import Splash from "./pages/Splash";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Callback from "./pages/Callback";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";
import FavoritesProvider from "./components/FavoritesProvider";
import AuthenticationGuard from "./components/AuthenticationGuard";

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
              },
              {
                path: "/profile",
                element: <Profile />
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
