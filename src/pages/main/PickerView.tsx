import { useState, useEffect } from "react";
import { ParseFromString } from "../../core/parse";
import { Questionaire } from "../../core/questionaire";

type Props = {
  setQuestionaire: (quest: Questionaire) => void;
};

const PickerView = ({ setQuestionaire }: Props) => {
  const [rawJson, setRawJson] = useState<string | null>(null);

  useEffect(() => {
    if (rawJson !== null) {
      parseQuest(rawJson);
    }
  }, [rawJson]);

  const parseQuest = async (raw: string) => {
    const data = await ParseFromString(raw);
    setQuestionaire(data);
  };
  return (
    <div>
      <p>open file</p>
      <input
        type="file"
        onChange={(e) => {
          const files = e.target.files;
          if (files != null && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.addEventListener("load", (event) => {
              const result = event.target?.result;
              if (typeof result == "string") {
                setRawJson(result);
              }
            });
            reader.readAsBinaryString(file);
          }
        }}
      />
    </div>
  );
};

export default PickerView;
