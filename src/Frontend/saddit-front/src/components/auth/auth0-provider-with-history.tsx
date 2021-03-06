import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

interface Props {
  children?: React.ReactNode;
}

const Auth0ProviderWithHistory = ({ children }: Props) => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ""}
      clientId={process.env.REACT_APP_AUTHO_CLIENT_ID ?? ""}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
