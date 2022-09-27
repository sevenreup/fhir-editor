import { DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, IconButton } from "@chakra-ui/react";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";

const BlockHeader = ({
  question: { linkId, type },
  onDeleteClicked,
}: QuestionaireItemContainerProps) => {
  return (
    <Flex justify="space-between" w="full" my={3}>
      <Flex>
        <p>{linkId}</p>
        <Box ml="1.5">
          <Badge ml="1" colorScheme="green">
            {type}
          </Badge>
        </Box>
      </Flex>

      <Flex gap={2}>
        <IconButton icon={<SettingsIcon />} aria-label={""} />
        <IconButton
          icon={<DeleteIcon />}
          aria-label={""}
          onClick={() => onDeleteClicked()}
        />
      </Flex>
    </Flex>
  );
};

export default BlockHeader;
