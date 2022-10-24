import { Box, Heading, Stack, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { Resizable } from "re-resizable";
import { Control, UseFormRegister } from "react-hook-form";
import EnableWhenControls from "../../../components/editable/EnableWhenControls";
import { Questionaire, QuestionItem } from "../../../core/questionaire";
import { SelectedQuestionItemAtom } from "../../../state";

type Props = {};

const QuestionaireItemProperties = (props: Props) => {
  const [questionItem] = useAtom(SelectedQuestionItemAtom);

  return (
    <Resizable
      minWidth={80}
      maxWidth="60%"
      maxHeight="100%"
      defaultSize={{ height: "auto", width: "20%" }}
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
        {questionItem && (
          <PropertiesContainer
            question={questionItem.question}
            register={questionItem.register}
            path={questionItem.path}
            control={questionItem.control}
          />
        )}
      </Box>
    </Resizable>
  );
};

const PropertiesContainer = ({
  question,
  register,
  control,
  path,
}: {
  question: QuestionItem;
  register: UseFormRegister<Questionaire>;
  control: Control<Questionaire, any>;
  path?: string;
}) => {
  return (
    <Stack>
      <Heading as="h4" size="md" p={4}>
        Properties
      </Heading>
      <Box
        style={{
          overflow: "scroll",
          height: "100vh",
        }}
        p={8}
      >
        <p>{question.linkId}</p>
        <EnableWhenControls
          question={question}
          register={register}
          control={control}
          path={path}
        />
      </Box>
    </Stack>
  );
};

export default QuestionaireItemProperties;
