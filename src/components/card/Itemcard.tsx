import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FC, PropsWithChildren } from "react";
import { Control, UseFormRegister } from "react-hook-form";
import { Questionaire, QuestionItem } from "../../core/questionaire";
import { SelectedQuestionItemAtom } from "../../state";

type Props = {
  question: QuestionItem;
  register: UseFormRegister<Questionaire>;
  path?: string;
  control: Control<Questionaire, any>;
};

const Itemcard: FC<PropsWithChildren<Props>> = ({
  children,
  question,
  register,
  control,
  path,
}) => {
  const [selected, setQuestionItem] = useAtom(SelectedQuestionItemAtom);

  let click = () => {
    setQuestionItem({ question, register, path, control });
  };

  return (
    <Box
      width="full"
      background="#fff"
      shadow="sm"
      _hover={{
        borderColor: "ActiveBorder",
        borderWidth: "1px",
        shadow: "none",
      }}
      p={6}
      cursor="pointer"
      borderWidth="1px"
      borderColor={
        selected?.question.id === question.id ? "ActiveBorder" : "transparent"
      }
      borderRadius="lg"
      overflow="hidden"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        click();
      }}
      onMouseOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {children}
    </Box>
  );
};

export default Itemcard;
