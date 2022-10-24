import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Select,
  Switch,
} from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { Control, UseFormRegister } from "react-hook-form/dist/types";
import {
  Questionaire,
  QuestionAnswerType,
  QuestionAnswerTypesValues,
  QuestionItem,
} from "../../core/questionaire";
import {
  EnableOperatorsValues,
  EnableRules,
} from "../../core/questionaire/rules";
import EditableTextBlock from "./EditableTextBlock";

type Props = {
  question: QuestionItem;
  register: UseFormRegister<Questionaire>;
  control: Control<Questionaire, any>;
  path?: string;
};

const EnableWhenControls = ({
  question: { enableBehavior, enableWhen },
  register,
  path,
  control,
}: Props) => {
  const { fields, remove, append } = useFieldArray({
    control: control,
    name: `${path}.enableWhen`,
  } as never);
  // const enableWhen = fields as any as EnableRules[];

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Enable Behavior</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        <Divider orientation="horizontal" my={4} />
        <FormControl>
          <FormLabel>Enable Rules</FormLabel>
          {(enableWhen?.length ?? 0) <= 0 ? (
            <Box p={2} textAlign="center">
              <p>Looks like nothing is here</p>
            </Box>
          ) : (
            enableWhen?.map((rule, index) => (
              <div key={index}>
                <FormControl>
                  <FormLabel>Question</FormLabel>
                  <div>{rule.question}</div>
                </FormControl>
                <FormControl>
                  <FormLabel>Answer Type</FormLabel>
                  <Select
                    {...(register(`${path}.enableWhen.${index}.type`) as any)}
                  >
                    {QuestionAnswerTypesValues.map((opts) => (
                      <option key={opts} value={opts}>{opts}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Operator</FormLabel>
                  <Select
                    {...(register(
                      `${path}.enableWhen.${index}.operator`
                    ) as any)}
                  >
                    {EnableOperatorsValues.map((op) => (
                      <option key={op} value={op}>{op}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Value</FormLabel>
                  <AnswerValueContent
                    type={rule.type}
                    value={rule.answer}
                    {...(register(`${path}.enableWhen.${index}.answer`) as any)}
                  />
                </FormControl>
              </div>
            ))
          )}
          <AddRuleButton
            onClick={() => {
              const rule: EnableRules = {
                question: "",
                operator: "exists",
                type: "string",
                answer: "",
              };
              append(rule);
            }}
          />
        </FormControl>
      </Box>
    </>
  );
};

const AnswerValueContent = ({
  type,
  value,
  ...others
}: {
  type: QuestionAnswerType;
  value: any;
}) => {
  if (type == "boolean") {
    return <Switch {...others} />;
  } else if (type == "string") {
    return <EditableTextBlock defaultValue={value} {...others} />;
  } 
  else {
    return <div>
      {JSON.stringify(value)}
    </div>
  }
};

const AddRuleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button mt={1.5} w="full" onClick={onClick}>
      Add Rule
    </Button>
  );
};

export default EnableWhenControls;
