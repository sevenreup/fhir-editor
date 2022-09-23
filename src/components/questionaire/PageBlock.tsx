import { VStack } from "@chakra-ui/react";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import Card from "../general/Card";

const PageBlock = (props: QuestionaireItemContainerProps) => {
  const { question } = props;
  return (
    <Card>
      <BlockHeader {...props} />
      <h3>{question.title}</h3>
      <VStack>
        {/* {question.children?.map((quest) => (
          <QuestionareContainer question={quest} />
        ))} */}
      </VStack>
    </Card>
  );
};

export default PageBlock;
