import Itemcard from "../card/Itemcard";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";

export const DispalyBlock = (props: QuestionaireItemContainerProps) => {
  const { question, index, register, path } = props;
  const elPath = `${path}.title`;

  return (
    <Itemcard onClick={() => {}}>
      <BlockHeader {...props} />
      <EditableTextBlock
        id={elPath}
        defaultValue={question.title}
        // @ts-ignore
        {...register(elPath)}
      />
    </Itemcard>
  );
};
