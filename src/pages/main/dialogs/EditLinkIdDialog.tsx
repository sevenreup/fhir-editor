import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
} from "@chakra-ui/react";

type Props = {
  linkId?: string;
  isOpen: boolean;
  onClose: () => void;
};

const EditLinkIdDialog = ({ linkId, isOpen, onClose }: Props) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Id</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>ffff</div>
        </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="ghost">Save</Button>
      </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditLinkIdDialog;
