import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  TabPanel,
  TabPanels,
  Tabs,
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
import QuestionaireItemProperties from "../../views/properties/QuestionaireItemProperties";

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
        <Tabs width="full">
          <Grid
            templateAreas={`"header"
                        "content"
                        "footer"`}
            gridTemplateRows={"54px 1fr 54px"}
            h="100vh"
            width="full"
          >
            <GridItem area={"header"}>
              <QuestionareToolbar />
            </GridItem>
            <GridItem area={"content"} overflow="scroll">
              <TabPanels>
                <TabPanel>
                  <QuestionaireArraysView
                    questionaire={questionaire}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                </TabPanel>
                <TabPanel>Here</TabPanel>
              </TabPanels>
            </GridItem>
            <GridItem area={"footer"}>
              <Button onClick={onOpen}>Add Question</Button>
              <Button type="submit" form="quest-create-form">
                Save
              </Button>
            </GridItem>
          </Grid>
        </Tabs>
        <QuestionaireItemProperties />
      </Flex>
    </>
  );
};

export const QuestionaireArraysView = ({
  isOpen,
  onClose,
  questionaire,
}: {
  isOpen: boolean;
  questionaire: Questionaire;
  onClose: () => void;
}) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: questionaire });

  function onSubmit(values: any) {
    console.log(values);
    const fhir = encodeFhirQuestionare(values);
    console.log(JSON.stringify(fhir));
  }
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  } as never);
  const [pageCount, setPageCount] = useAtom(PageCountAtom);

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
      </form>
    </>
  );
};
