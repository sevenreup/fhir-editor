import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
};

const Itemcard: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
  return (
    <Box
      width="full"
      background="#fff"
      shadow="sm"
      _hover={{
        borderColor: "ActiveBorder",
        borderWidth: "1px",
        shadow: "none",
      }}
      p={6}
      cursor="pointer"
      borderWidth="1px"
      borderColor="transparent"
      borderRadius="lg"
      overflow="hidden"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Itemcard;
