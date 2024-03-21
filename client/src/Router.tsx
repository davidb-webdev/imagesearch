import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Splash from "./pages/Splash";
import Favorites from "./pages/Favorites";
import { Auth0Provider } from "@auth0/auth0-react";
import FavoritesProvider from "./components/FavoritesProvider";
import Callback from "./pages/Callback";
import AuthenticationGuard from "./components/AuthenticationGuard";

const Auth0ProviderWithNavigate = () => {
  const navigate = useNavigate();
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: redirectUri
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Outlet />
    </Auth0Provider>
  );
};

const router = createBrowserRouter([
  {
    element: <Auth0ProviderWithNavigate />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Splash />,
        index: true
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
