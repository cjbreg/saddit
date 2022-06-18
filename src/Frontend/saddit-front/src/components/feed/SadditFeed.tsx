import { Box, Container, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../shared/saddit-api-client";
import { fetchPosts } from "../../store/actions";
import { State } from "../../store/reducers";
import PostComponent from "../post/PostComponent";

const SadditFeed = () => {
  const dispatch = useDispatch();

  const { posts, loading, error } = useSelector((state: State) => state.post);

  useEffect(() => {
    requestPosts();
  }, []);

  const requestPosts = () => {
    dispatch(fetchPosts());
  };

  const renderPosts = () => {
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

export default SadditFeed;
