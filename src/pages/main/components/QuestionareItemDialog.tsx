import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { QuestionItem } from "../../../core/questionaire";
import { QuestionType } from "../../../core/questionaire/enums";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: QuestionItem) => void;
};

const schema = yup
  .object({
    linkId: yup.string().required(),
    type: yup
      .mixed<QuestionType>()
      .oneOf(Object.values(QuestionType))
      .required(),
  })
  .required();

const QuestionareItemDialog = ({ isOpen, onClose, onSave }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      linkId: "",
      type: null,
    },
  });

  const onSubmit = (data: any) => {
    const quest = {
      id: data.linkId,
      title: "",
      type: data.type,
      rules: {},
      isTranslated: false,
    };
    onSave(quest);
  };

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new Questionaire Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            id="create-quest-item-form"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSubmit(onSubmit)(e);
            }}
          >
            <FormControl isInvalid={errors.linkId}>
              <FormLabel htmlFor="linkId">Link Id</FormLabel>
              <Input
                type="text"
                id="linkId"
                placeholder="This is the Id of the Field."
                {...register("linkId")}
              />
              <FormErrorMessage>
                {errors.linkId && errors.linkId.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!errors.linkId}>
              <FormLabel htmlFor="type">Link Id</FormLabel>
              <Select
                id="type"
                placeholder="Select Question Type"
                {...register("type")}
              >
                {Object.keys(QuestionType).map((value) => (
                  <option value={(QuestionType as any)[value]}>{value}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.type && errors.type.message}
              </FormErrorMessage>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" type="submit" form="create-quest-item-form">
            Create Item
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuestionareItemDialog;
