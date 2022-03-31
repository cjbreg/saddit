import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import LoginButton from "../components/auth/LoginButton";

const MotionImage = motion(Image);

const Home = () => {
  return (
    <Box w="100%">
      <Box
        bg="#282c34"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize={"calc(10px + 2vmin)"}
      >
        <StyledImage
          src={logo}
          alt="logo"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          w="33vh"
          h="33vh"
        />
        <LoginButton />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LinkText
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </LinkText>
      </Box>
    </Box>
  );
};

const StyledImage = styled(MotionImage)`
  overflow: hidden;
`;

const LinkText = styled.a`
  color: #61dafb;
`;

export default Home;
