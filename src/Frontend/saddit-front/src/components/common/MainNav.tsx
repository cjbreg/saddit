import React from "react";
import { Stack, Flex, Text } from "@chakra-ui/react";

const MainNav = () => {
  return (
    <Stack
      justify={"flex-start"}
      flex={{ base: 1, md: "auto" }}
      direction={"row"}
    >
      <Flex
        flex={{ base: 1, md: "auto" }}
        ml={{ base: -2 }}
        display={{ base: "flex", md: "none" }}
      >
        <p>Test</p>
      </Flex>
    </Stack>
  );
};

export default MainNav;
