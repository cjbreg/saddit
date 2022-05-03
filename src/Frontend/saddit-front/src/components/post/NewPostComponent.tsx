import { Box, Button, Flex, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../../store/actions";
import { State } from "../../store/reducers";
import AuthenticationButton from "../auth/AuthenticationButton";

const NewPostComponent = () => {
  const dispatch = useDispatch();

  const { user, username } = useSelector((state: State) => state.auth);

  const [content, setContent] = useState("");

  const handleContentChange = (event: any) => setContent(event.target.value);

  const handleSubmitNewPost = () => {
    dispatch(newPost({ username, userId: 1, content }));
  };

  const hasNoContent = () => {
    return content === "";
  };

  const renderForm = () => {
    return (
      <Box
        p="4"
        w="full"
        maxW="500px"
        borderRadius={8}
        backgroundColor={"gray.700"}
        mb={2}
      >
        <Text mb={2}>New post as {username ?? "login"}</Text>

        <Textarea
          placeholder="Your post here"
          resize="none"
          onChange={handleContentChange}
          value={content}
          mb={2}
        />
        <Flex justifyContent={"flex-end"}>
          <Button
            borderRadius={8}
            variant="solid"
            colorScheme="teal"
            onClick={handleSubmitNewPost}
            isDisabled={hasNoContent()}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    );
  };

  const renderLoginRequest = () => {
    return (
      <Box
        p="4"
        w="full"
        maxW="500px"
        borderRadius={8}
        backgroundColor={"gray.700"}
        mb={2}
      >
        <Text mb={2}>Login to submit your own posts</Text>
        <Stack
          flex={1}
          justifyContent={"flex-end"}
          spacing={2}
          direction={"row"}
        >
          <AuthenticationButton />
        </Stack>
      </Box>
    );
  };

  return user ? renderForm() : renderLoginRequest();
};

export default NewPostComponent;
