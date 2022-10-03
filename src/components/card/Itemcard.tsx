import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FC, PropsWithChildren } from "react";
import { QuestionItem } from "../../core/questionaire";
import { SelectedQuestionItemAtom } from "../../state";

type Props = {
  question: QuestionItem;
};

const Itemcard: FC<PropsWithChildren<Props>> = ({ children, question }) => {
  const [selected, setQuestionItem] = useAtom(SelectedQuestionItemAtom);

  let click = () => {
    setQuestionItem(question);
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
        selected?.id === question.id ? "ActiveBorder" : "transparent"
      }
      borderRadius="lg"
      overflow="hidden"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        click();
      }}
      onMouseOver={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      {children}
    </Box>
  );
};

export default Itemcard;
