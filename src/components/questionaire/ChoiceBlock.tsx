import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, VStack, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { Questionvalue, ValueCoding } from "../../core/questionaire";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";
import Card from "../general/Card";

const ChoiceBlock = (props: QuestionaireItemContainerProps) => {
  const { question } = props;
  return (
    <Card>
      <BlockHeader {...props} />
      <EditableTextBlock defaultValue={question.title} />
      {!question.answerOption && <div>No answers provided</div>}

      {question.answerOption && (
        <Box p={2}>
          <Text fontSize="md" my={4}>
            Answer Options
          </Text>
          <VStack>
            {question.answerOption?.map((option) => (
              <QuestionAnswerOption value={option} />
            ))}
            <Button>Add Options</Button>
          </VStack>
        </Box>
      )}
    </Card>
  );
};

const QuestionAnswerOption = ({ value }: { value: Questionvalue }) => {
  return (
    <Box w="full" p={4} background="gray.100" borderRadius="lg">
      <Flex justify="space-between">
        <div>{value.type}</div>
        <div>
          <IconButton icon={<EditIcon />} aria-label={""} />
          <IconButton icon={<DeleteIcon />} aria-label={""} />
        </div>
      </Flex>
      {value.type === "coding" && (
        <QuestionAnswerOptionCoding code={value.value as ValueCoding} />
      )}
    </Box>
  );
};

const QuestionAnswerOptionCoding = ({ code }: { code: ValueCoding }) => {
  return (
    <div>
      <p>{code.system}</p>
      <p>{code.display}</p>
      <p>{code.code}</p>
    </div>
  );
};

export default ChoiceBlock;
