import { EnableBehavior, QuestionType } from "./enums";
import { EnableRules, QuestionRules } from "./rules";

const answerTypes = ["boolean", "string", "number", "Date", "coding"] as const;

export type QuestionAnswerType = typeof answerTypes[number];

export interface Questionvalue {
  value: any;
  type: QuestionAnswerType;
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
  title: string;
  hasPages: boolean;
  items: QuestionItem[];
}

export interface ValueCoding {
  system: string;
  code: string;
  display: string;
}
