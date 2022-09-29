import { FhirContact, FhirExtensionConcept, FhirUseContext } from "../fhir/f4";
import { FhirCodeableConcept } from "../fhir/types";
import { EnableBehavior, QuestionType } from "./enums";
import { EnableRules, QuestionRules } from "./rules";

const answerTypes = ["boolean", "string", "number", "Date", "coding"] as const;
export type QuestionAnswerType = typeof answerTypes[number];

const statusTypes = ["draft", "active", "retired", "unknown"] as const;
export type QuestionaireStatusType = typeof statusTypes[number];

export type ExtensionTypes = QuestionAnswerType | "CodeableConcept"

export type ExtensionsValue = {
  url: string;
  type: ExtensionTypes;
  value: FhirCodeableConcept | object;
};

export interface Questionvalue {
  value: any;
  type: QuestionAnswerType;
}

export interface QuestionItem {
  id: string;
  linkId: string;
  title: string;
  type: QuestionType;
  enableWhen?: EnableRules[];
  enableBehavior?: EnableBehavior;
  rules: QuestionRules;
  answerOption?: Questionvalue[];
  initial?: Questionvalue[];
  children?: QuestionItem[];
  isTranslated: boolean;
  extensions?: ExtensionsValue[];
}

export interface QuestPage extends QuestionItem {
  title: string;
  children: QuestionItem[];
}

export interface Questionaire {
  id: string;
  title: string;
  status: QuestionaireStatusType;
  pages: number;
  items: QuestionItem[];
  settings: {
    extension?: FhirExtensionConcept[];
    useContext?: FhirUseContext[];
  };
  info: {
    publisher?: string;
    contacts?: FhirContact[];
    language?: string;
  };
}

export interface ValueCoding {
  system: string;
  code: string;
  display: string;
}
