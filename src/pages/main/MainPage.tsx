import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { MainAtom } from "../../state";
import PickerView from "./PickerView";
import { QuestionnaireView } from "./QuestionnaireView";

export default function MainPage() {
  const [state, setState] = useAtom(MainAtom);

  return (
    <Box>
      {!state.isEditing && (
        <PickerView
          setQuestionaire={(quest) => {
            setState({
              isEditing: true,
              questionaire: quest,
            });
          }}
        />
      )}
      {state.questionaire && (
        <QuestionnaireView questionaire={state.questionaire} />
      )}
    </Box>
  );
}
