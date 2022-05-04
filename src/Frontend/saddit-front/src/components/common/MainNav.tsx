import React from "react";
import { Stack, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <Stack
      justify={"flex-start"}
      flex={{ base: 1, md: "auto" }}
      direction={"row"}
    >
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        <Text
          textAlign={{ base: "center" }}
          fontWeight={700}
          color={"white"}
          fontSize={"x-large"}
        >
          <Link to="/">Saddit</Link>
        </Text>
      </Flex>
    </Stack>
  );
};

export default MainNav;
