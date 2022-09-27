import { Box, Button, useDisclosure, VStack } from "@chakra-ui/react";
import QuestionareContainer from "../../components/containers/QuestionareContainer";
import { Questionaire, QuestionItem } from "../../core/questionaire";
import {
  Control,
  useFieldArray,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import QuestionareItemDialog from "./components/QuestionareItemDialog";

interface IQuestionnaireViewProps {
  questionaire: Questionaire;
}

export const QuestionnaireView = ({
  questionaire,
}: IQuestionnaireViewProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: questionaire });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <form id="quest-create-form" onSubmit={handleSubmit(onSubmit)}>
      <Box p={8}>
        <h1>{questionaire.title}</h1>
        <QuestionaireArraysView control={control} register={register} />
      </Box>
    </form>
  );
};

export const QuestionaireArraysView = ({
  control,
  register,
}: {
  control: Control<Questionaire, any>;
  register: UseFormRegister<Questionaire>;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  } as never);

  return (
    <>
      <VStack>
        {fields.map((quest, index) => (
          <QuestionareContainer
            key={quest.id}
            index={index}
            question={quest as QuestionItem}
            onDeleteClicked={() => {
              remove(index);
            }}
            register={register}
            control={control}
          />
        ))}
        <Button onClick={onOpen}>Add Question</Button>
        <Button type="submit">Save</Button>
      </VStack>
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
