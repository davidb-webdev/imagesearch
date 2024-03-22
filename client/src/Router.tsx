import { createBrowserRouter } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";
import CallbackPage from "./pages/CallbackPage";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";
import FavoritesProvider from "./components/FavoritesProvider";
import AuthenticationGuard from "./components/AuthenticationGuard";
import LayoutCentered from "./pages/LayoutCentered";
import ErrorMessageProvider from "./components/ErrorMessageProvider";

const router = createBrowserRouter([
  {
    element: <Auth0ProviderWithNavigate />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LayoutCentered />,
        children: [
          {
            path: "/",
            element: <SplashPage />
          }
        ]
      },
      {
        element: <ErrorMessageProvider />,
        children: [
          {
            element: <AuthenticationGuard component={FavoritesProvider} />,
            children: [
              {
                element: <Layout />,
                children: [
                  {
                    path: "/callback",
                    element: <CallbackPage />
                  },
                  {
                    path: "/search",
                    element: <SearchPage />
                  },
                  {
                    path: "/favorites",
                    element: <FavoritesPage />
                  },
                  {
                    path: "/profile",
                    element: <ProfilePage />
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
