import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const SignupButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <Button
      colorScheme={"teal"}
      isLoading={isLoading}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </Button>
  );
};

export default SignupButton;
