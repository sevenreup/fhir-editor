import { QuestionType } from "../../core/questionaire/enums";
import { IQuestionnaireItemProps } from "../../types";
import { DispalyBlock } from "../editable/DispalyBlock";
import PageBlock from "../editable/PageBlock";

const QuestionareContainer = ({ question }: IQuestionnaireItemProps) => {
  if (question.type == QuestionType.PAGE) {
    return <PageBlock question={question} />;
  } else if (question.type == QuestionType.BOOLEAN) {
    return <div>switch</div>;
  } else if (question.type == QuestionType.DISPLAY) {
    return <DispalyBlock question={question} />;
  } else {
    return <div style={{ color: "red" }}>nothing</div>;
  }
};

export default QuestionareContainer;
