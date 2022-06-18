import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../../shared/saddit-api-client";
import { State } from "../../store/reducers";
import PostComponent from "../post/PostComponent";

const SubSadditFeed = () => {
  const { posts, loading, error } = useSelector((state: State) => state.post);

  const renderEmptyState = () => {
    return (
      <Box p="4" maxW="500px" borderRadius={8} backgroundColor={"gray.800"}>
        <Flex align="baseline" mb={2}>
          <Text>No posts yet.</Text>
        </Flex>
      </Box>
    );
  };

  const renderPosts = () => {
    if (posts.length === 0) return renderEmptyState();
    return (
      <>
        {posts.map((post: Post, index: number) => {
          return (
            <Box mb={1} key={index}>
              <PostComponent post={post} />
            </Box>
          );
        })}
      </>
    );
  };

  if (error.enabled) {
    return (
      <Box>
        <Text>error</Text>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box>
        <Text>loading</Text>
      </Box>
    );
  }

  return <Container>{renderPosts()}</Container>;
};

export default SubSadditFeed;
