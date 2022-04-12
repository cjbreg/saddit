import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Button colorScheme={"red"} onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
