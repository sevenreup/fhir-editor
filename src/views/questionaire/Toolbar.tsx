import { Flex, Tab, TabList } from "@chakra-ui/react";

type Props = {};

const QuestionareToolbar = (props: Props) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        width="full"
        height="full"
      >
        <TabList>
          <Tab>Questionnaire Items</Tab>
          <Tab>Questionnaire</Tab>
        </TabList>
      </Flex>
    </>
  );
};

export default QuestionareToolbar;
