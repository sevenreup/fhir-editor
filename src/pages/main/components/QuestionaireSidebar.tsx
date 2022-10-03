import { Box } from "@chakra-ui/react";
import { Resizable } from "re-resizable";

type Props = {};

const QuestionaireSidebar = (props: Props) => {
  return (
    <Resizable minWidth={80} maxWidth="60%">
      <Box background="white">
        <p>Side Bar</p>
      </Box>
    </Resizable>
  );
};

export default QuestionaireSidebar;
