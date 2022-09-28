export type FhirCodeableConcept = {
  coding: [
    {
      system: string;
      code: string;
      display: string;
    }
  ];
  text: string;
};
