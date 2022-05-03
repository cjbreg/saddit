import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Post } from "../../shared/saddit-api-client";

type Props = {
  post: Post;
};

const PostComponent = (props: Props) => {
  const { post } = props;

  return (
    <Box p="4" maxW="500px" borderRadius={8} backgroundColor={"gray.800"}>
      <Flex align="baseline" mb={2}>
        <Badge colorScheme="green" mr={2}>
          s/{post.subSadditName}
        </Badge>
        <Text>{post.username}</Text>
      </Flex>
      <Text mt={2}>{post.content}</Text>
      <Text>Created at: {post.createdAt}</Text>
    </Box>
  );
};

export default PostComponent;
