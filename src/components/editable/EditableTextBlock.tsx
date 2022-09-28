import {
  forwardRef,
  Input,
  InputProps,
  EditablePreview,
  useColorModeValue,
  Editable,
  Tooltip,
  EditableInput,
} from "@chakra-ui/react";
import { CustomEditablePreview, EditableControls } from "./EditableControls";
interface Props extends InputProps {
  id?: string | undefined;
}

const EditableTextBlock = forwardRef(
  ({ defaultValue, id, ...others }: Props, ref) => {
    return (
      <Editable
        defaultValue={defaultValue as any}
        isPreviewFocusable={true}
        selectAllOnFocus={false}
        placeholder="Enter Text"
      >
        <Tooltip label="Click to edit">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700"),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} id={id} {...others} ref={ref} />
        <EditableControls />
      </Editable>
    );
  }
);
export default EditableTextBlock;
