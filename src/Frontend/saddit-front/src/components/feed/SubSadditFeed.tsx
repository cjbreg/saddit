import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../../shared/saddit-api-client";
import { State } from "../../store/reducers";
import PostComponent from "../post/PostComponent";

const SubSadditFeed = () => {
  const { posts, loading, error } = useSelector((state: State) => state.post);

  const renderPosts = () => {
    return (
      <>
        {posts.map((post: Post, index: number) => {
          return (
            <Box mb={1}>
              <PostComponent post={post} key={index} />
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
