import { Control, UseFormRegister } from "react-hook-form";
import { Questionaire } from "../../core/questionaire";
import { QuestionType } from "../../core/questionaire/enums";
import { IQuestionnaireItemProps } from "../../types";
import BooleanBlock from "../questionaire/BooleanBlock";
import ChoiceBlock from "../questionaire/ChoiceBlock";
import { DispalyBlock } from "../questionaire/DispalyBlock";
import GroupBlock from "../questionaire/GroupBlock";
import InputBlock from "../questionaire/InputBlock";

export interface QuestionaireItemContainerProps
  extends IQuestionnaireItemProps {
  onDeleteClicked: () => void;
  register: UseFormRegister<Questionaire>;
  index: number;
  control: Control<Questionaire, any>;
  path?: string;
}

const QuestionareContainer = (props: QuestionaireItemContainerProps) => {
  const { question } = props;
  if (question.type == QuestionType.BOOLEAN) {
    return <BooleanBlock {...props}/>;
  } else if (question.type == QuestionType.DISPLAY) {
    return <DispalyBlock {...props} />;
  } else if (
    question.type == QuestionType.INTEGER ||
    question.type == QuestionType.DECIMAL ||
    question.type == QuestionType.STRING
  ) {
    return <InputBlock {...props} />;
  } else if (question.type == QuestionType.CHOICE) {
    return <ChoiceBlock {...props} />;
  } else if (
    question.type == QuestionType.GROUP ||
    question.type == QuestionType.PAGE
  ) {
    return (
      <GroupBlock isPage={question.type == QuestionType.PAGE} quest={props} />
    );
  } else {
    return <div style={{ color: "red" }}>nothing</div>;
  }
};

export default QuestionareContainer;
