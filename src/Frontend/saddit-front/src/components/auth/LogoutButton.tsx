import React from "react";
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
