import { Button, useDisclosure, VStack } from "@chakra-ui/react";
import { Resizable } from "re-resizable";
import { FC, PropsWithChildren, ReactNode } from "react";
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
    <GroupContainer isPage={isPage}>
      <Card type={isPage ? "filled" : "outline"} question={question}  register={props.register} path={props.path} control={props.control}>
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
        <Button
          mt={2}
          width="full"
          onClick={() => {
            onOpen();
          }}
        >
          Add Question
        </Button>
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
    </GroupContainer>
  );
};

const GroupContainer: FC<
  PropsWithChildren<{
    isPage: boolean;
  }>
> = ({ isPage, children }) => {
  if (isPage) {
    return (
      <Resizable
        defaultSize={{
          width: 320,
          height: "100%",
        }}
        minWidth={320}
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
        {children}
      </Resizable>
    );
  } else {
    return <>{children}</>;
  }
};

export default GroupBlock;
