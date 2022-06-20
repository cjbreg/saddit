import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import SubSadditFeed from "../components/feed/SubSadditFeed";
import NewPostComponent from "../components/post/NewPostComponent";
import { fetchSubSadditPosts } from "../store/actions";

const SubSadditView = () => {
  const dispatch = useDispatch();
  let { subSadditName } = useParams();

  useEffect(() => {
    requestPosts();
    console.log(process.env);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subSadditName]);

  const requestPosts = () => {
    dispatch(fetchSubSadditPosts(subSadditName));
  };

  return (
    <Box w="100%">
      <Navbar />
      <Box
        bgGradient="linear(to-r, gray.400, gray.600)"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="white"
        pt={4}
      >
        <NewPostComponent subSadditName={subSadditName ?? "all"} />
        <SubSadditFeed />
      </Box>
    </Box>
  );
};

export default SubSadditView;
