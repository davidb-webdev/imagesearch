import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";
import FavoritesContextContainer from "./components/FavoritesContextContainer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <FavoritesContextContainer>
        <RouterProvider router={router} />
      </FavoritesContextContainer>
    </Auth0Provider>
  </React.StrictMode>
);
