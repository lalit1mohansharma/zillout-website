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
import { useBookings } from "../hooks/useBookings";

export default function UserBookings() {
  const { data, isLoading } = useBookings();
  return (
    <Container
      maxW={"100%"}
      minH={"100vh"}
      p="0"
      pt={4}
      background="#111111"
      mb={"65px"}
      overflow={"hidden"}
    >
      <BackNavigation />
      {isLoading ? (
        <Flex w="100%" h="75vh" alignItems={"center"} justifyContent="center">
          <Spinner color="white" />
        </Flex>
      ) : (
        <Flex></Flex>
      )}
    </Container>
  );
}
