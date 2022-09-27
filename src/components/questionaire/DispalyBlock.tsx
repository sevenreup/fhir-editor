import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";
import Card from "../general/Card";

export const DispalyBlock = (props: QuestionaireItemContainerProps) => {
  const { question, index, register, path } = props;
  const elPath = `${path}.title`;

  return (
    <Card>
      <BlockHeader {...props} />
      <EditableTextBlock
        id={elPath}
        defaultValue={question.title}
        {...register(elPath)}
      />
    </Card>
  );
};
