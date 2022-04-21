import React from "react";
import logo from "../logo.svg";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const MotionImage = motion(Image);

const LoadingView = () => {
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
      </Box>
    </Box>
  );
};

const StyledImage = styled(MotionImage)`
  overflow: hidden;
`;

export default LoadingView;
