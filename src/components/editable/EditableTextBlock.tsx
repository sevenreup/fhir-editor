import {
  Input,
} from "@chakra-ui/react";

type Props = { defaultValue?: string | null; id?: string | undefined };

const EditableTextBlock = ({ defaultValue, id, ...others }: Props) => {
  return <Input id={id} placeholder="Enter Text" {...others} />;
};

export default EditableTextBlock;
