import { EnableOperators } from "../questionaire/rules";
import { FhirCodeableConcept } from "./types";

export interface FhirQuestionnaireResource {
  resourceType: string;
  id: string;
  language?: string;
  extension?: FhirExtensionConcept[];
  status?: string;
  title?: string;
  publisher?: string;
  contact?: FhirContact[];
  useContext?: FhirUseContext[];
  item: FhirQuestionItem[];
}

export interface FhirContact {
  name: string;
}

export interface FhirUseContext {
  code: {
    system: string;
    code: string;
  };
  valueCodeableConcept: {
    coding: [
      {
        system: string;
        code: string;
        display: string;
      }
    ];
  };
}

export interface FhirExtensionConcept {
  url: string;
  valueBoolean?: boolean;
  valueCode?: object;
  valueDate?: string;
  valueDateTime?: string;
  valueDecimal?: number;
  valueId?: string;
  valueInstant?: object;
  valueInteger?: number;
  valueMarkdown?: string;
  valueOid?: object;
  valuePositiveInt?: number;
  valueString?: string;
  valueAge?: string;
  valueCodeableConcept?: FhirCodeableConcept;
  valueCodeableReference?: object;
  valueCoding?: object;
  valueReference?: object;
}

export interface FhirAnswerOptions {
  // C? Permitted answer
  // value[x]: Answer value. One of these 6:
  valueInteger?: number;
  valueDate?: string; // date,
  valueTime?: string; // time,
  valueString?: string;
  valueCoding?: object; // { Coding },
  valueReference?: string; // { Reference(Any) },
  initialSelected?: boolean; // Whether option is selected by default
}

export interface FhirQuestionItem {
  linkId: string;
  extension?: FhirExtensionConcept[];
  definition?: string; // ElementDefinition - details for the item
  // code : [{ Coding }],C? Corresponding concept for this item in a terminology
  prefix?: string; // E.g. 1(a), 2.5.3
  text: string; // Primary text for the item
  type:
    | "group"
    | "display"
    | "boolean"
    | "decimal"
    | "integer"
    | "date"
    | "dateTime";
  enableWhen?: [
    {
      // Only allow data when
      question: string; // R!  Question that determines whether item is enabled
      operator: EnableOperators;
      // answer[x]: Value for question comparison based on operator. One of these 10:
      answerBoolean: boolean;
      answerDecimal: string; // decimal;
      answerInteger: string; // integer;
      answerDate: string; // date;
      answerDateTime: string; // dateTime;
      answerTime: string; // time;
      answerString: string;
      answerCoding: object; // { Coding };
      answerQuantity: object; // { Quantity };
      answerReference: object; // { Reference(Any) };
    }
  ];
  enableBehavior?: "all" | "any";
  required?: boolean; // C? Whether the item must be included in data results
  repeats?: boolean; // C? Whether the item may repeat
  readOnly?: boolean; // C? Don't allow human editing
  maxLength?: number; // C? No more than this many characters
  //  answerValueSet : { canonical(ValueSet) }, C? Valueset containing permitted answers
  answerOption?: FhirAnswerOptions[];
  initial?: [
    {
      // C? Initial value(s) when item is first rendered
      // value[x]: Actual value for initializing the question. One of these 12:
      valueBoolean: boolean;
      valueDecimal: number;
      valueInteger: number;
      valueDate: string; // date
      valueDateTime: string; // dateTime
      valueTime: string; // time
      valueString: string;
      valueUri: string; // uri
      valueAttachment: string; // { Attachment }
      valueCoding: string; // { Coding }
      valueQuantity: string; // { Quantity }
      valueReference: string; // { Reference(Any) }
    }
  ];
  item?: FhirQuestionItem[];
}
