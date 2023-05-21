import { Button, HStack, Input, VStack, Text, Icon } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Counter: React.FC<{
  index: number;
  heading: string;
  subText: string;
  counter: number[];
  setCounter: Dispatch<SetStateAction<number[]>>;
  isDisabled?: boolean;
  price?: string;
}> = ({ index, heading, subText, counter, setCounter, isDisabled, price }) => {
  let counterInput = [...counter];
  const [value, setValue] = useState(0);
  const [isDecDisabled, setIsDecDisabled] = useState(true);

  useEffect(() => {
    counterInput[index] = value;
    setCounter([...counterInput]);
    setIsDecDisabled(value < 1);
  }, [value]);

  return (
    <HStack justifyContent="space-between" w="100%" alignItems={"center"}>
      <VStack
        align={"flex-start"}
        p={0}
        spacing={1}
        opacity={isDisabled ? 0.6 : 1}
      >
        <Text fontSize="md" fontWeight={600} color="white" height="24px">
          {heading}
        </Text>
        <Text fontSize="12px" color="#9D9D9D" my={4} maxWidth="100%">
          {subText}
        </Text>
        {price && (
          <Text color={"#9D9D9D"} fontWeight={600}>
            ₹{price}
          </Text>
        )}
      </VStack>
      {!isDisabled && (
        <HStack alignItems={"center"}>
          <Button
            borderRadius={"50%"}
            p={2}
            w="20px"
            minW={"20px"}
            h="20px"
            isDisabled={isDecDisabled}
            onClick={() => setValue(value - 1)}
          >
            <Icon as={FaMinus} fontSize="14px" color="black" />
          </Button>
          <Input
            w="55px"
            h={"40px"}
            textColor={"white"}
            textAlign={"center"}
            borderColor="darkgray"
            backgroundColor={"#363636"}
            value={value}
          />
          <Button
            borderRadius={"50%"}
            p={2}
            w="20px"
            minW={"20px"}
            h="20px"
            onClick={() => setValue(value + 1)}
          >
            <Icon as={FaPlus} fontSize="14px" color="black" />
          </Button>
        </HStack>
      )}
    </HStack>
  );
};

export default Counter;
