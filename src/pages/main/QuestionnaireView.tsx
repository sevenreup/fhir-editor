import { Box, Button, VStack } from "@chakra-ui/react";
import QuestionareContainer from "../../components/containers/QuestionareContainer";
import { Questionaire } from "../../core/questionaire";

interface IQuestionnaireViewProps {
  questionaire: Questionaire;
}

export const QuestionnaireView = ({
  questionaire,
}: IQuestionnaireViewProps) => {
  return (
    <Box p={8}>
      <h1>{questionaire.title}</h1>
      <VStack>
        {questionaire.items.map((quest) => (
          <QuestionareContainer question={quest} />
        ))}
        <Button>Add Question</Button>
      </VStack>
    </Box>
  );
};
