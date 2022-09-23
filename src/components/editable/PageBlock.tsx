import { IQuestionnaireItemProps } from "../../types";
import QuestionareContainer from "../containers/QuestionareContainer";

const PageBlock = ({ question }: IQuestionnaireItemProps) => {
  return (
    <div>
      <h3>{question.title}</h3>
      {question.items?.map((quest) => (
        <QuestionareContainer question={quest} />
      ))}
    </div>
  );
};

export default PageBlock;
