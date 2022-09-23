import {
  Editable,
  EditablePreview,
  Input,
  EditableInput,
} from "@chakra-ui/react";
import EditableControls from "./EditableControls";

type Props = { defaultValue?: string | null };

const EditableTextBlock = ({ defaultValue }: Props) => {
  return (
    <Editable
      textAlign="start"
      defaultValue={defaultValue ?? ""}
      fontSize="2xl"
      isPreviewFocusable={false}
      placeholder="Enter Text"
    >
      <EditablePreview />
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  );
};

export default EditableTextBlock;
