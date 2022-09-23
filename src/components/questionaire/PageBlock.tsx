import { Box, VStack } from "@chakra-ui/react";
import { IQuestionnaireItemProps } from "../../types";
import QuestionareContainer from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import Card from "../general/Card";

const PageBlock = ({ question }: IQuestionnaireItemProps) => {
  return (
    <Card>
      <BlockHeader question={question} />
      <h3>{question.title}</h3>
      <VStack>
        {question.items?.map((quest) => (
          <QuestionareContainer question={quest} />
        ))}
      </VStack>
    </Card>
  );
};

export default PageBlock;
