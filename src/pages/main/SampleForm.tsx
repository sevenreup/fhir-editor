import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FieldArray from "../../components/questionaire/FieldArray";

const defaultValues = {
  test: [
    {
      name: "useFieldArray1",
      nestedArray: [{ field1: "field1", field2: "field2" }],
    },
    {
      name: "useFieldArray2",
      nestedArray: [{ field1: "field1", field2: "field2" }],
    },
  ],
};

type Props = {};

const SampleForm = (props: Props) => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data: any) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>

      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

      <Button type="button" onClick={() => reset(defaultValues)}>
        Reset
      </Button>

      <input type="submit" />
    </form>
  );
};

export default SampleForm;
