import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const PubCard: React.FC<{ pub: any }> = ({ pub }) => {
  return (
    <Link to={`/pub/detail/${pub.id}`}>
      <Card w={"90vw"} maxW="100%" background={"#1E1E1E"} borderRadius={"10px"}>
        <Flex direction="column" w={"100%"} mb={4}>
          <Image
            src={pub.pub_logo}
            w="100%"
            h="140px"
            objectFit={"cover"}
            borderTopRadius={"6px"}
          />
          <Flex justifyContent="space-between">
            <VStack w={"85%"} alignItems="flex-start">
              <Text
                color={"white"}
                fontSize={"16px"}
                fontWeight={"600"}
                mx={2}
                mt={2}
              >
                {pub.name}
              </Text>
              <HStack mt={"1 !important"}>
                <Text
                  fontSize={"10px"}
                  fontWeight={"600"}
                  color={"#828282"}
                  mx={2}
                  letterSpacing={"1px"}
                >
                  {pub.type}
                </Text>
                <Text fontSize={"12px"} fontWeight={"700"} color={"#828282"}>
                  &#x2022;
                </Text>
                <Text fontSize={"10px"} fontWeight={"600"} color={"#828282"}>
                  {pub.address}
                </Text>
              </HStack>
            </VStack>
            <Flex mt={4}>
              {pub.rating && (
                <Stack spacing={-6} alignItems="center" ml="auto" mr={2}>
                  <Image src={"/images/rating.svg"} />
                  <Text pr={0.5} pt={0.5} fontWeight="600" fontSize="sm">
                    {pub.rating}
                  </Text>
                </Stack>
              )}
            </Flex>
          </Flex>
          {/* <Divider h={1} my={4} /> */}
        </Flex>
      </Card>
    </Link>
  );
};

export default PubCard;
