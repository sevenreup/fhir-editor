import { EnableBehavior, QuestionType } from "./enums";
import { EnableRules, QuestionRules } from "./rules";

interface Questionvalue {
  value: boolean | string | number | Date | object | any;
}

export interface QuestionItem {
  id: string;
  title: string;
  type: QuestionType;
  enableWhen?: EnableRules[];
  enableBehavior?: EnableBehavior;
  rules: QuestionRules;
  answerOption?: Questionvalue[];
  initial?: Questionvalue[];
  items?: QuestionItem[];
  isTranslated: boolean;
}

export interface QuestPage extends QuestionItem {
  title: string;
  items: QuestionItem[];
}

export interface Questionaire {
    title: string,
    hasPages: boolean,
    items: QuestionItem[]
}
