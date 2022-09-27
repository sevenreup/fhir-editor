import { forwardRef, Input, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
  id?: string | undefined;
}

const EditableTextBlock =  forwardRef(({ defaultValue, id, ...others }: Props, ref) => {
  return <Input id={id} placeholder="Enter Text" {...others} ref={ref} />;
})

export default EditableTextBlock;
