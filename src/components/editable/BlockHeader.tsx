import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { IQuestionnaireItemProps } from "../../types";


const BlockHeader = ({ question: { id } }: IQuestionnaireItemProps) => {
  return (
    <Flex justify="space-between" w="full" my={3}>
      <p>{id}</p>
      <IconButton icon={<SettingsIcon />} aria-label={""} />
    </Flex>
  );
};

export default BlockHeader;
