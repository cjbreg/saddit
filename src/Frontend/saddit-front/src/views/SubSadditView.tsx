import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import SadditFeed from "../components/feed/SadditFeed";
import NewPostComponent from "../components/post/NewPostComponent";

const SubSadditView = () => {
  let { subSadditName } = useParams();

  return (
    <Box w="100%">
      <Navbar />
      <Box
        bgGradient="linear(to-r, gray.400, gray.600)"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="white"
        pt={4}
      >
        <Text>{subSadditName}</Text>
        <NewPostComponent />
        <SadditFeed />
      </Box>
    </Box>
  );
};

export default SubSadditView;
