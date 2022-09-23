import React from "react";
import { IQuestionnaireItemProps } from "../../types";

export const DispalyBlock = ({ question }: IQuestionnaireItemProps) => {
  return (
    <div>
      <input value={question.title} />
    </div>
  );
};
