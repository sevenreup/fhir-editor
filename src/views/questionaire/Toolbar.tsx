import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const QuestionareToolbar = (props: Props) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="teal.500"
        color="white"
        width="full"
        position="fixed"
        height="54px"
        zIndex={10}
      >
        kk
      </Flex>
      <div style={{height: 54}}/>
    </>
  );
};

export default QuestionareToolbar;
