export interface QuestionRules {
  required?: boolean;
  repeats?: boolean;
  readOnly?: boolean;
  maxLength?: number;
}

export interface EnableRules {
  question: string;
  operator: "exists" | "=" | "!=" | ">" | ">=" | "<" | "<=";
  answer: boolean | string | number | Date | object;
}