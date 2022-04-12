import React from "react";
import AuthenticationButton from "./AuthenticationButton";
import { Stack } from "@chakra-ui/react";

const AuthNav = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <AuthenticationButton />
    </Stack>
  );
};

export default AuthNav;
