import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import QuestionareContainer from "../../components/containers/QuestionareContainer";
import { Questionaire, QuestionItem } from "../../core/questionaire";
import { useFieldArray, useForm } from "react-hook-form";
import QuestionareItemDialog from "./components/QuestionareItemDialog";
import { encodeFhirQuestionare } from "../../core/encode";
import QuestionareToolbar from "../../views/questionaire/Toolbar";
import { useAtom } from "jotai";
import { PageCountAtom } from "../../state";
import { QuestionType } from "../../core/questionaire/enums";

interface IQuestionnaireViewProps {
  questionaire: Questionaire;
}

export const QuestionnaireView = ({
  questionaire,
}: IQuestionnaireViewProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Box width={500} background="white">
          <p>Side Bar</p>
        </Box>
        <Box width="full">
          <Grid
            templateAreas={`"header"
                        "content"
                        "footer"`}
            gridTemplateRows={"54px 1fr 54px"}
            h="100vh"
            width="full"
          >
            <GridItem bg="orange.300" area={"header"}>
              <QuestionareToolbar />
            </GridItem>
            <GridItem area={"content"} overflow="scroll">
              <QuestionaireArraysView
                questionaire={questionaire}
                isOpen={isOpen}
                onClose={onClose}
              />
            </GridItem>
            <GridItem area={"footer"}>
              <Button onClick={onOpen}>Add Question</Button>
              <Button type="submit" form="quest-create-form">
                Save
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export const QuestionaireArraysView = ({
  questionaire,
  isOpen,
  onClose,
}: {
  questionaire: Questionaire;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: questionaire });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  } as never);

  const [pageCount, setPageCount] = useAtom(PageCountAtom);

  function onSubmit(values: any) {
    console.log(values);
    const fhir = encodeFhirQuestionare(values);
    console.log(JSON.stringify(fhir));
  }

  return (
    <>
      <form id="quest-create-form" onSubmit={handleSubmit(onSubmit)}>
        <Box
          display={pageCount > 0 ? "inline-flex" : "flex"}
          flexDirection={pageCount > 0 ? "unset" : "column"}
          gap={2}
          p={2}
        >
          {fields.map((quest, index) => (
            <QuestionareContainer
              key={quest.id}
              index={index}
              path={`items.${index}`}
              question={quest as QuestionItem}
              onDeleteClicked={() => {
                remove(index);
                if ((quest as any).type == QuestionType.PAGE) {
                  setPageCount(pageCount - 1);
                }
              }}
              register={register}
              control={control}
            />
          ))}
        </Box>
      </form>

      <QuestionareItemDialog
        isOpen={isOpen}
        onClose={onClose}
        onSave={(quest) => {
          onClose();
          console.log(quest);
          if (quest.type == QuestionType.PAGE) {
            setPageCount(pageCount + 1);
          }
          append(quest);
        }}
      />
    </>
  );
};
