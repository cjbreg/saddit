import React from "react";
import logo from "../logo.svg";
import { Box, Container, Image } from "@chakra-ui/react";
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
        bgGradient="linear(to-r, gray.400, gray.600)"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <StyledImage
          src={logo}
          alt="logo"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          w="33vh"
          h="33vh"
        />
        <Container
          bgGradient="linear(to-r, gray.600, gray.800)"
          p={4}
          borderRadius={12}
        >
          <Box display="flex" flexDirection="row" pb={4}>
            <StyledImage
              src={user?.picture}
              alt="profile picture"
              w="20"
              h="20"
              borderRadius={12}
            />
            <Box p={4}>
              <p>Name = {user?.name}</p>
              <p>Email = {user?.email}</p>
            </Box>
          </Box>

          <LogoutButton />
        </Container>
      </Box>
    </Box>
  );
};

const StyledImage = styled(MotionImage)``;

export default Home;
