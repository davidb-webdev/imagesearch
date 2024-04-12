import { Auth0Provider } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = () => {
  const navigate = useNavigate();
  const redirectUri = import.meta.env.VITE_FRONTEND_BASE_URL + "/callback";

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

export default Auth0ProviderWithNavigate;
