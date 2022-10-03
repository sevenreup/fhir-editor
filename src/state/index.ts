import { atom } from "jotai";
import { Questionaire, QuestionItem } from "../core/questionaire";

interface MainAtomState {
  isEditing: boolean;
  questionaire?: Questionaire | null;
}

export const MainAtom = atom<MainAtomState>({
  isEditing: false,
  questionaire: null,
});

export const SelectedQuestionItemAtom = atom<QuestionItem | null>(null);

export const PageCountAtom = atom(0);
