import { DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer";
import { AiOutlineMore as MoreIcon } from "react-icons/ai";
import EditLinkIdDialog from "../../pages/main/dialogs/EditLinkIdDialog";

const BlockHeader = ({
  question: { linkId, type },
  onDeleteClicked,
}: QuestionaireItemContainerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex justify="space-between" w="full" my={3}>
        <Flex>
          <p>{linkId}</p>
          <Box ml="1.5">
            <Badge ml="1" colorScheme="green">
              {type}
            </Badge>
          </Box>
        </Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MoreIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<DeleteIcon />} onClick={onOpen}>
              Edit Item Id
            </MenuItem>
            <MenuItem icon={<DeleteIcon />} onClick={onDeleteClicked}>
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <EditLinkIdDialog isOpen={isOpen} onClose={onClose} linkId={linkId} />
    </>
  );
};

export default BlockHeader;
