import { Button, useDisclosure, VStack } from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import QuestionareItemDialog from "../../pages/main/components/QuestionareItemDialog";
import QuestionareContainer, {
  QuestionaireItemContainerProps,
} from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import Card from "../general/Card";

interface GroupProps {
  isPage: boolean;
  quest: QuestionaireItemContainerProps;
}

const GroupBlock = ({ isPage, quest: props }: GroupProps) => {
  const { question, ...others } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { fields, remove, append } = useFieldArray({
    control: others.control,
    name: `${others.path}.children`,
  } as never);

  return (
    <>
      <Card>
        <BlockHeader {...props} />
        <h3>{question.title}</h3>
        <VStack>
          {fields?.map((quest, index) => (
            <QuestionareContainer
              key={quest.id}
              index={index}
              path={`${others.path}.children.${index}`}
              question={quest as any}
              onDeleteClicked={() => {
                remove(index);
              }}
              register={others.register}
              control={others.control}
            />
          ))}
        </VStack>
        <div>
          <Button
            onClick={() => {
              onOpen();
            }}
          >
            Add Question
          </Button>
        </div>
      </Card>
      <QuestionareItemDialog
        isOpen={isOpen}
        onClose={onClose}
        onSave={(quest) => {
          onClose();
          console.log(quest);
          append(quest);
        }}
      />
    </>
  );
};

export default GroupBlock;
