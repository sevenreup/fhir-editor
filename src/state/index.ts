import { atom } from "jotai";
import { Control, UseFormRegister } from "react-hook-form";
import { Questionaire, QuestionItem } from "../core/questionaire";

interface MainAtomState {
  isEditing: boolean;
  questionaire?: Questionaire | null;
}

export const MainAtom = atom<MainAtomState>({
  isEditing: false,
  questionaire: null,
});

interface SelectedQuestionProps {
  register: UseFormRegister<Questionaire>;
  control: Control<Questionaire, any>;
  question: QuestionItem;
  path?: string;
}

export const SelectedQuestionItemAtom = atom<SelectedQuestionProps | null>(null);

export const PageCountAtom = atom(0);
