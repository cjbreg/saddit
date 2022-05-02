import logo from "../logo.svg";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Navbar from "../components/common/Navbar";
import SadditFeed from "../components/feed/SadditFeed";
import NewPostComponent from "../components/post/NewPostComponent";

const MotionImage = motion(Image);

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
        {/* <StyledImage
          src={logo}
          alt="logo"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          w="33vh"
          h="33vh"
        /> */}
        <NewPostComponent />
        <SadditFeed />
      </Box>
    </Box>
  );
};

const StyledImage = styled(MotionImage)``;

export default Home;
