import { Box } from "@chakra-ui/react";
import Navbar from "../components/common/Navbar";
import SadditFeed from "../components/feed/SadditFeed";
import NewPostComponent from "../components/post/NewPostComponent";

const Home = () => {
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
        <NewPostComponent subSadditName="all" />
        <SadditFeed />
      </Box>
    </Box>
  );
};

export default Home;
