import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";
import Card from "../general/Card";

export const DispalyBlock = (props: QuestionaireItemContainerProps) => {
  const { question } = props;
  return (
    <Card>
      <BlockHeader {...props} />
      <EditableTextBlock defaultValue={question.title} />
    </Card>
  );
};
