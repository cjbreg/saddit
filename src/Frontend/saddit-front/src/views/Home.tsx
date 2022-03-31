import React from "react";
import logo from "../logo.svg";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import LogoutButton from "../components/auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const MotionImage = motion(Image);

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

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
        <LogoutButton />
        <p>Email = {user?.email}</p>

        <StyledImage
          src={user?.picture}
          alt="profile picture"
          w="20"
          h="20"
          borderRadius={12}
        />
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
