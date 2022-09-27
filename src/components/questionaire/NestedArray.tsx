import { Button, Input } from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test.${nestIndex}.nestedArray`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Nested Array:</label>
            <Input 
              {...register(`test.${nestIndex}.nestedArray.${k}.field1`, {
                required: true,
              })}
              style={{ marginRight: "25px" }}
            />

            <Input  {...register(`test.${nestIndex}.nestedArray.${k}.field2`)} />
            <Button type="button" onClick={() => remove(k)}>
              Delete Nested
            </Button>
          </div>
        );
      })}

      <Button
        type="button"
        onClick={() =>
          append({
            field1: "field1",
            field2: "field2",
          })
        }
      >
        Append Nested
      </Button>

      <hr />
    </div>
  );
};
