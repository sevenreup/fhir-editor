import { Button, Input } from "@chakra-ui/react";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import NestedArray from "./NestedArray";

let renderCount = 0;

interface Props {
  control: Control<any>;
  register: UseFormRegister<any>,
  setValue: UseFormRegister<any>,
  getValues: UseFormRegister<any>
}

export default function Fields({ control, register, setValue, getValues }: Props) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "test",
  });

  renderCount++;

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <Input  {...register(`test.${index}.name`)} />

              <Button type="button" onClick={() => remove(index)}>
                Delete
              </Button>
              <NestedArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <Button
          type="button"
          onClick={() => {
            append({ name: "append" });
          }}
        >
          append
        </Button>

        <Button
          type="button"
          onClick={() => {
            setValue("test", [
              ...(getValues().test || []),
              {
                name: "append",
                nestedArray: [{ field1: "append", field2: "append" }],
              },
            ]);
          }}
        >
          Append Nested
        </Button>

        <Button
          type="button"
          onClick={() => {
            prepend({ name: "append" });
          }}
        >
          prepend
        </Button>

        <Button
          type="button"
          onClick={() => {
            setValue("test", [
              {
                name: "append",
                nestedArray: [{ field1: "Prepend", field2: "Prepend" }],
              },
              ...(getValues().test || []),
            ]);
          }}
        >
          prepend Nested
        </Button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
