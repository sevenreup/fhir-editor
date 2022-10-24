import { QuestionAnswerType } from ".";

export const EnableOperatorsValues = ["exists" , "=" ,"!=" , ">" , ">=" , "<" , "<="] as const
export type EnableOperators = typeof EnableOperatorsValues[number]

export interface QuestionRules {
  required?: boolean;
  repeats?: boolean;
  readOnly?: boolean;
  maxLength?: number;
}

export interface EnableRules {
  question: string;
  operator: EnableOperators;
  type: QuestionAnswerType;
  answer: boolean | string | number | Date | object;
}