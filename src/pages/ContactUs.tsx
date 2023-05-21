import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  useMediaQuery,
  Tag,
  TagLabel,
  Spinner,
  Divider,
  Link,
} from "@chakra-ui/react";
import BackNavigation from "../components/BackNavigation";

export default function ContactUs() {
  return (
    <Container
      maxW={"100%"}
      h={"100vh"}
      p="0"
      pt={4}
      background="#111111"
      overflow={"hidden"}
    >
      <BackNavigation heading="Contact Us" />

      <Flex flexDir={"column"} w="100%" h="100%" p={6} mt={20}>
        <VStack alignItems={"flex-start"} my={4} lineHeight={1.2}>
          <Text color={"#9D9D9D"}>Contact No</Text>
          <Text color={"white"} fontWeight={600}>
            +91-9380841878
          </Text>
        </VStack>
        <VStack alignItems={"flex-start"} my={4} lineHeight={1.2}>
          <Text color={"#9D9D9D"}>Email</Text>
          <Text color={"white"} fontWeight={600}>
            Squad@zillout.com
          </Text>
        </VStack>
        <VStack alignItems={"flex-start"} my={4} lineHeight={1.2}>
          <Text color={"#9D9D9D"}>Address</Text>
          <Text color={"white"} fontWeight={600}>
            B Hive workspace, 148, 5th Main Rd, Sector 6, HSR Layout, Bengaluru,
            Karnataka 560102
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
}
