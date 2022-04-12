import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import AuthNav from "../auth/AuthNav";
import MainNav from "./MainNav";

const Navbar = () => {
  return (
    <Box>
      <Flex
        bg={"gray.800"}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.900"}
        align={"center"}
      >
        <MainNav />
        <AuthNav />
      </Flex>
    </Box>
  );
};

export default Navbar;
