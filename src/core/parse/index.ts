import { FhirQuestionItem, FhirQuestionnaireResource } from "../fhir/f4";
import { IsFhirPage } from "../fhir/helpers";
import {
  Questionaire,
  QuestionAnswerType,
  QuestionItem,
  QuestPage,
} from "../questionaire";
import { QuestionType } from "../questionaire/enums";
import { QuestionRules } from "../questionaire/rules";
import { IsKeyInObjectNotNull } from "../utils/objects";

export async function ParseFromString(data: string): Promise<Questionaire> {
  const json = JSON.parse(data) as FhirQuestionnaireResource;
  const items = json.item;
  const allItems: QuestionItem[] = [];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    allItems.push(ToItem(item));
  }

  return {
    title: json.title,
    items: allItems,
    hasPages: false,
  };
}

function ToItem(item: FhirQuestionItem): QuestionItem {
  const rules: QuestionRules = {};
  const quest: QuestionItem = {
    id: item.linkId,
    title: item.text,
    type: FhirQuestTypeToQuestType(item.type),
    rules: rules,
    isTranslated: false,
  };

  if (item.type == "group") {
    if (item.extension !== undefined) {
      for (let index = 0; index < item.extension.length; index++) {
        const ext = item.extension[index];
        if (IsFhirPage(ext)) {
          quest.type = QuestionType.PAGE;
        } else {
        }
      }
    }
  }

  const answerOptions = item.answerOption;
  if (answerOptions !== null && answerOptions !== undefined) {
    quest.answerOption = answerOptions?.map((value) => {
      let typeOfVar: QuestionAnswerType;
      let valueData: any;
      if (IsKeyInObjectNotNull(value, "valueInteger")) {
        typeOfVar = "number";
        valueData = value["valueInteger"];
      } else if (IsKeyInObjectNotNull(value, "valueString")) {
        typeOfVar = "string";
        valueData = value["valueString"];
      } else if (IsKeyInObjectNotNull(value, "valueCoding")) {
        typeOfVar = "coding";
        valueData = value["valueCoding"];
      } else {
        typeOfVar = "number";
        valueData = value["valueInteger"];
      }

      return {
        value: valueData,
        type: typeOfVar,
      };
    });
  }

  quest.children = item.item?.map((inner) => ToItem(inner));
  return quest;
}

function FhirQuestTypeToQuestType(type: string): QuestionType {
  switch (type) {
    case "choice":
      return QuestionType.CHOICE;
    case "integer":
      return QuestionType.INTEGER;
    case "string":
      return QuestionType.STRING;
    case "decimal":
      return QuestionType.DECIMAL;
    default:
      return QuestionType.DISPLAY;
  }
}
