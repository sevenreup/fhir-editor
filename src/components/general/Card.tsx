import { Box } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";

type Props = {
  background?: string
};

const Card: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Box width="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
      {children}
    </Box>
  );
};

export default Card;
