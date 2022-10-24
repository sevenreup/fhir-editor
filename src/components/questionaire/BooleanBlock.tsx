import Itemcard from "../card/Itemcard";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";

const BooleanBlock = (props: QuestionaireItemContainerProps) => {
  return (
    <Itemcard question={props.question}  register={props.register} path={props.path} control={props.control}>
      <BlockHeader {...props} />
      <EditableTextBlock
        defaultValue={props.question.title}
        // @ts-ignore
        {...props.register(`${props.path}.title`)}
      />
    </Itemcard>
  );
};

export default BooleanBlock;
