import { IQuestionnaireItemProps } from "../../types";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";
import Card from "../general/Card";

const InputBlock = ({ question }: IQuestionnaireItemProps) => {
  return (
    <Card>
      <BlockHeader question={question} />
      <EditableTextBlock defaultValue={question.title} />
    </Card>
  );
};

export default InputBlock;
