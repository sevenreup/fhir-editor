import { Box, HTMLChakraProps } from "@chakra-ui/react";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface Props extends HTMLChakraProps<"div"> {
  type?: "outline" | "filled";
}

const Card: FC<PropsWithChildren<Props>> = ({
  children,
  type = "outline",
  className,
  ...others
}) => {
  return (
    <Box
      width="full"
      borderWidth={type == "filled" ? "none" : "1px"}
      borderRadius="lg"
      overflow="hidden"
      background={type == "filled" ? "#f6f4f4" : "transparent"}
      {...others}
      className={clsx(className)}
      p={6}
    >
      {children}
    </Box>
  );
};

export default Card;
