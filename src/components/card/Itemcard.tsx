import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = {};

const Itemcard: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Box
      width="full"
      background="#fff"
      shadow="sm"
      p={6}
      borderRadius="lg"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default Itemcard;
