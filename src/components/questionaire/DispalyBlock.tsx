import { useFieldArray, useFormContext } from "react-hook-form";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import BlockHeader from "../editable/BlockHeader";
import EditableTextBlock from "../editable/EditableTextBlock";
import Card from "../general/Card";

export const DispalyBlock = (props: QuestionaireItemContainerProps) => {
  const { question, index, register } = props;

  return (
    <Card>
      <BlockHeader {...props} />
      <EditableTextBlock id={`items[${index}].title`} defaultValue={question.title}  {...register(`items.${index}.title` as never)}/>
    </Card>
  );
};
