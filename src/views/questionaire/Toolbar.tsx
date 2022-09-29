import { Flex } from "@chakra-ui/react";

type Props = {};

const QuestionareToolbar = (props: Props) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="#e2e8f0"
        textColor="black"
        color="white"
        width="full"
        height="full"
      >
        App Bar
      </Flex>
    </>
  );
};

export default QuestionareToolbar;
