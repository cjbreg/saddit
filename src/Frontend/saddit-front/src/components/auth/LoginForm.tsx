import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { auth } from "./auth.service";

type Props = {
  closeForm(): void;
};

const LoginForm = ({ closeForm }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password).then((data) => {
      console.log(data.user?.email); // TODO: Store userData
      accessToken();
      closeForm();
    });
  };

  const accessToken = async () => {
    const token = await auth.currentUser?.getIdToken();
    console.log(token); // TODO: Store bearer token
  };

  return (
    <Flex
      flexDirection="column"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "70%", md: "368px" }}>
          <form>
            <Stack spacing={4} p="1rem">
              <FormControl>
                <InputGroup>
                  <Input
                    value={email}
                    type="email"
                    placeholder="email address"
                    onChange={handleEmailChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
