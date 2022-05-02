import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../../store/actions";
import { State } from "../../store/reducers";

const NewPostComponent = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: State) => state.auth);

  const [content, setContent] = useState("");

  const handleContentChange = (event: any) => setContent(event.target.value);

  const handleSubmitNewPost = () => {
    dispatch(newPost({ userName: user.username, userId: user.id, content }));
  };

  return (
    <Box p="4" maxW="500px" borderRadius={8} backgroundColor={"gray.700"}>
      <Text>New post as {user.username ?? "login"}</Text>
      <Textarea
        placeholder="Your post here"
        size="sm"
        onChange={handleContentChange}
        value={content}
      />
      <Button
        borderRadius={0}
        variant="solid"
        colorScheme="teal"
        width="full"
        onClick={handleSubmitNewPost}
      >
        Submit
      </Button>
    </Box>
  );
};

export default NewPostComponent;
