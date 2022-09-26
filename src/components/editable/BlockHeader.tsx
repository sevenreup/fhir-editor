import { DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";

const BlockHeader = ({
  question: { id, type },
  onDeleteClicked,
}: QuestionaireItemContainerProps) => {
  return (
    <Flex justify="space-between" w="full" my={3}>
      <div>
        <p>{id}</p>
        <p>{type}</p>
      </div>

      <div>
        <IconButton icon={<SettingsIcon />} aria-label={""} />
        <IconButton
          icon={<DeleteIcon />}
          aria-label={""}
          onClick={() => onDeleteClicked()}
        />
      </div>
    </Flex>
  );
};

export default BlockHeader;
