import { FhirQuestionItem, FhirQuestionnaireResource } from "../fhir/f4";
import { IsFhirPage } from "../fhir/helpers";
import {
  ExtensionTypes,
  Questionaire,
  QuestionAnswerType,
  QuestionItem,
} from "../questionaire";
import { EnableBehavior, QuestionType } from "../questionaire/enums";
import { EnableRules, QuestionRules } from "../questionaire/rules";
import { IsKeyInObjectNotNull, IsNotNullOrUndefined } from "../utils/objects";

export async function ParseFromString(data: string): Promise<Questionaire> {
  const json = JSON.parse(data) as FhirQuestionnaireResource;
  const items = json.item;
  const allItems: QuestionItem[] = [];
  let pages = 0;

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    allItems.push(
      ToItem(item, () => {
        pages = pages + 1;
      })
    );
  }

  const quest: Questionaire = {
    id: json.id,
    title: json.title ?? "",
    status: (json.status as any) ?? "draft",
    pages: pages,
    items: allItems,
    settings: {
      extension: json.extension,
      useContext: json.useContext,
    },
    info: {
      publisher: json.publisher,
      contacts: json.contact,
      language: json.language,
    },
  };

  return quest;
}

function ToItem(item: FhirQuestionItem, hasPages: () => void): QuestionItem {
  const rules: QuestionRules = {};
  const quest: QuestionItem = {
    id: item.linkId,
    linkId: item.linkId,
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
          hasPages();
        } else {
        }
      }
    }
  }
  // TODO!: Add Value Reference
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

  // TODO!: Add more types
  const extensions = item.extension;
  if (IsNotNullOrUndefined(extensions)) {
    quest.extensions = extensions?.map((value) => {
      let typeOfVar: ExtensionTypes;
      let valueData: any;

      if (IsKeyInObjectNotNull(value, "valueCodeableConcept")) {
        typeOfVar = "CodeableConcept";
        valueData = value.valueCodeableConcept;
      } else {
        typeOfVar = "string";
        valueData = value.valueString;
      }

      return {
        url: value.url,
        type: typeOfVar,
        value: valueData,
      };
    });
  }

  if (item.enableBehavior) {
    const bev = item.enableBehavior;
    quest.enableBehavior =
      bev == "all" ? EnableBehavior.ALL : EnableBehavior.ANY;
  }

  if (item.enableWhen) {
    quest.enableWhen = item.enableWhen.map((rule) => {
      let typeOfVar: QuestionAnswerType;
      let valueData: any;

      if (IsKeyInObjectNotNull(rule, "answerString")) {
        typeOfVar = "string";
      } else if (IsKeyInObjectNotNull(rule, "answerCoding")) {
        typeOfVar = "coding";
        valueData = rule.answerCoding;
      } else {
        typeOfVar = "string";
        valueData = rule.answerBoolean;
      }

      const newRule: EnableRules = {
        question: rule.question,
        operator: rule.operator,
        type: typeOfVar,
        answer: valueData,
      };

      return newRule;
    });
  }

  quest.children = item.item?.map((inner) =>
    ToItem(inner, () => {
      hasPages();
    })
  );
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
