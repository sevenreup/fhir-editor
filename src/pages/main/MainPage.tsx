import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { MainAtom, PageCountAtom } from "../../state";
import PickerView from "./PickerView";
import { QuestionnaireView } from "./QuestionnaireView";

export default function MainPage() {
  const [mainState, setMainState] = useAtom(MainAtom);
  const [_, setPageCount] = useAtom(PageCountAtom);

  return (
    <Box>
      {!mainState.isEditing && (
        <PickerView
          setQuestionaire={(quest, pages) => {
            setMainState({
              isEditing: true,
              questionaire: quest,
            });
            setPageCount(pages);
          }}
        />
      )}
      {mainState.questionaire && (
        <QuestionnaireView questionaire={mainState.questionaire} />
      )}
    </Box>
  );
}
