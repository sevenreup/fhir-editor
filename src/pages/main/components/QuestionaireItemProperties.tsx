import { Box, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { Resizable } from "re-resizable";
import { QuestionItem } from "../../../core/questionaire";
import { SelectedQuestionItemAtom } from "../../../state";

type Props = {};

const QuestionaireItemProperties = (props: Props) => {
  const [questionItem] = useAtom(SelectedQuestionItemAtom);

  return (
    <Resizable
      minWidth={80}
      maxWidth="60%"
      maxHeight="100%"
      defaultSize={{ height: "auto", width: 80 }}
      enable={{
        left: true,
        right: false,
        top: false,
        bottom: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <Box background="white">
        {!questionItem && <div>Please select stuff</div>}
        {questionItem && <PropertiesContainer question={questionItem} />}
      </Box>
    </Resizable>
  );
};

const PropertiesContainer = ({ question }: { question: QuestionItem }) => {
  return (
    <VStack>
      <h6>Properties</h6>
      <p>{question.linkId}</p>
    </VStack>
  );
};

export default QuestionaireItemProperties;
