import { Box, HTMLChakraProps } from "@chakra-ui/react";
import clsx from "clsx";
import { useAtom } from "jotai";
import { FC, PropsWithChildren } from "react";
import { Control, UseFormRegister } from "react-hook-form";
import { Questionaire, QuestionItem } from "../../core/questionaire";
import { SelectedQuestionItemAtom } from "../../state";

interface Props extends HTMLChakraProps<"div"> {
  type?: "outline" | "filled";
  question: QuestionItem;
  register: UseFormRegister<Questionaire>;
  path?: string;
  control: Control<Questionaire, any>;
}

const Card: FC<PropsWithChildren<Props>> = ({
  children,
  type = "outline",
  className,
  question,
  register,
  path,
  control,
  ...others
}) => {
  const [selected, setQuestionItem] = useAtom(SelectedQuestionItemAtom);

  let click = () => {
    setQuestionItem({ question, register, path, control });
  };

  return (
    <Box
      width="full"
      borderWidth={"1px"}
      _hover={{
        borderColor: "ActiveBorder",
        borderWidth: "1px",
        shadow: "none",
      }}
      borderRadius="lg"
      overflow="hidden"
      background={type == "filled" ? "#f6f4f4" : "transparent"}
      borderColor={
        selected?.question.id === question.id ? "ActiveBorder" : "transparent"
      }
      {...others}
      className={clsx(className)}
      p={6}
      onClick={click}
    >
      {children}
    </Box>
  );
};

export default Card;
