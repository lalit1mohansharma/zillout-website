import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const BackNavigation: React.FC<{
  heading?: string;
}> = ({ heading }) => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <Flex
      w="100%"
      p={4}
      pt={8}
      position={"fixed"}
      background={"#111111"}
      zIndex={1}
      align="center"
    >
      <ArrowBackIcon color={"white"} fontSize={"2xl"} onClick={goBack} />
      <Text color={"white"} fontSize={"lg"} fontWeight={600} ml={5}>
        {heading}
      </Text>
    </Flex>
  );
};

export default BackNavigation;
