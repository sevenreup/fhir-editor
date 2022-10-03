import Itemcard from "../card/Itemcard";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";

const InputBlock = (props: QuestionaireItemContainerProps) => {
  const { question } = props;
  return (
    <Itemcard onClick={() => {}}>
      <BlockHeader {...props} />
      <EditableTextBlock defaultValue={question.title} />
    </Itemcard>
  );
};

export default InputBlock;
