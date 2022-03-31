import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout, isLoading } = useAuth0();

  return (
    <Button
      colorScheme={"red"}
      isLoading={isLoading}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
