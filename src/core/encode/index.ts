import {
  FhirAnswerOptions,
  FhirExtensionConcept,
  FhirQuestionItem,
  FhirQuestionnaireResource,
} from "../fhir/f4";
import { Questionaire, QuestionItem } from "../questionaire";
import { IsNotNullOrUndefined } from "../utils/objects";

export const encodeFhirQuestionare = (questionaire: Questionaire) => {
  const resource: FhirQuestionnaireResource = {
    resourceType: "Questionnaire",
    id: questionaire.id,
    language: questionaire.info.language,
    extension: questionaire.settings.extension,
    status: questionaire.status,
    title: questionaire.title,
    publisher: questionaire.info.publisher,
    contact: questionaire.info.contacts,
    useContext: questionaire.settings.useContext,
    item: questionaire.items.map((child) => ToItem(child)),
  };
  JSON.stringify(resource);
  return resource;
};

function ToItem(item: QuestionItem): FhirQuestionItem {
  const fhir: FhirQuestionItem = {
    linkId: item.linkId,
    text: item.title,
    type: item.type.toString() as any,
    extension: item.extensions,
  };

  if (item.type == "page") {
    fhir.type = "group";
  }

  if (IsNotNullOrUndefined(item.children)) {
    fhir.item = item.children?.map((child) => ToItem(child));
  }

  if (IsNotNullOrUndefined(item.answerOption)) {
    fhir.answerOption = item.answerOption?.map((child) => {
      const opts: FhirAnswerOptions = {};

      if (child.type == "string") {
        opts.valueString = child.value;
      } else if (child.type == "number") {
        opts.valueInteger = child.value;
      } else if (child.type == "Date") {
        opts.valueDate = child.value;
      } else if (child.type == "boolean") {
        // opts.valueString = child.value;
      } else if (child.type == "coding") {
        opts.valueCoding = child.value;
      }

      return opts;
    });
  }

  if (IsNotNullOrUndefined(item.extensions)) {
    fhir.extension = item.extensions?.map((child) => {
      const value: FhirExtensionConcept = {
        url: child.url,
      };

      if (child.type === "CodeableConcept") {
        value.valueCodeableConcept = child.value as any;
      } else {
        value.valueString = child.value as any;
      }

      return value;
    });
  }

  return fhir;
}
