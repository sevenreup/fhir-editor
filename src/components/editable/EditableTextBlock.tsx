import {
  Editable,
  EditablePreview,
  Input,
  EditableInput,
} from "@chakra-ui/react";
import EditableControls from "./EditableControls";

type Props = { defaultValue?: string | null; id?: string | undefined };

const EditableTextBlock = ({ defaultValue, id, ...others }: Props) => {
  
  return (
    <Editable
      textAlign="start"
      defaultValue={defaultValue ?? ""}
      // fontSize="md"
      isPreviewFocusable={false}
      placeholder="Enter Text"
    >
      <EditablePreview />
      <Input as={EditableInput} id={id} {...others}/>
      <EditableControls />
    </Editable>
  );
};

export default EditableTextBlock;
