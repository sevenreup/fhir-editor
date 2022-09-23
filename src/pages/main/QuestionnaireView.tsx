import QuestionareContainer from "../../components/containers/QuestionareContainer";
import { DispalyBlock } from "../../components/editable/DispalyBlock";
import PageBlock from "../../components/editable/PageBlock";
import { Questionaire } from "../../core/questionaire";
import { QuestionType } from "../../core/questionaire/enums";
import { IQuestionnaireItemProps } from "../../types";

interface IQuestionnaireViewProps {
  questionaire: Questionaire;
}

export const QuestionnaireView = ({
  questionaire,
}: IQuestionnaireViewProps) => {
  return (
    <div>
      <h3>{questionaire.title}</h3>
      {questionaire.items.map((quest) => (
        <QuestionareContainer question={quest} />
      ))}
    </div>
  );
};
