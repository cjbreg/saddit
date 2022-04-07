import { Stack } from "@chakra-ui/react";
import React from "react";
import AuthenticationButton from "./AuthenticationButton";

const AuthNav = () => (
  <Stack
    flex={{ base: 1, md: 0 }}
    justify={"flex-end"}
    direction={"row"}
    spacing={6}
  >
    <AuthenticationButton />
  </Stack>
);

export default AuthNav;
