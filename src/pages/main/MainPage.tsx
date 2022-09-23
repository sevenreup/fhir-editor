import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ParseFromString } from "../../core/parse";
import { Questionaire } from "../../core/questionaire";
import { QuestionnaireView } from "./QuestionnaireView";

export default function MainPage() {
  const [rawJson, setRawJson] = useState<string | null>(null);
  const [questionaire, setQuestionnaire] = useState<Questionaire | null>(null);

  useEffect(() => {
    if (rawJson !== null) {
      
      
      parseQuest(rawJson);
    }
  }, [rawJson]);

  const parseQuest = async (raw: string) => {
    const data = await ParseFromString(raw);
    setQuestionnaire(data);
  };

  return (
    <Box p={8}>
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
      {questionaire && <QuestionnaireView questionaire={questionaire} />}
    </Box>
  );
}
