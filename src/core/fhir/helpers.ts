import { FhirExtensionConcept } from "./f4";

const PageExtension: FhirExtensionConcept = {
  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://hl7.org/fhir/questionnaire-item-control",
        code: "page",
        display: "Page 1",
      },
    ],
    text: "Page 1",
  },
};

export function IsFhirPage(ext: FhirExtensionConcept): boolean {
  return ext.valueCodeableConcept?.coding[0]?.code == "page";
}

export function GetFhirExtensionType(ext: FhirExtensionConcept) {
  if ("valueExpression" in ext) {
    
  } else if ("valueCodeableConcept" in ext) {
    
  }
}
