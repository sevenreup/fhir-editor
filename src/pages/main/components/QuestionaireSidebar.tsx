import { Box } from "@chakra-ui/react";
import { Resizable } from "re-resizable";

type Props = {};

const QuestionaireSidebar = (props: Props) => {
  return (
    <Resizable
      minWidth={80}
      maxWidth="60%"
      maxHeight="100%"
      defaultSize={{ height: "auto", width: 80 }}
      enable={{
        left: true,
        right: true,
        top: false,
        bottom: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <Box background="white">
        <p>Side Bar</p>
      </Box>
    </Resizable>
  );
};

export default QuestionaireSidebar;
