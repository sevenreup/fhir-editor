import { atom } from "jotai";
import { Questionaire } from "../core/questionaire";

interface MainAtomState {
  isEditing: boolean;
  questionaire?: Questionaire | null;
}

export const MainAtom = atom<MainAtomState>({
  isEditing: false,
  questionaire: null,
});

export const PageCountAtom = atom(0);
