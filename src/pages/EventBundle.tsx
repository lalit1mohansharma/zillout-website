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
import { useBundle } from "../hooks/useBundle";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import FooterNav from "../components/FooterNav";

export default function EventBundle() {
  const { eventType } = useParams<{ eventType: string }>();

  const { data, isLoading } = useBundle(eventType);
  return (
    <Container
      maxW={"100%"}
      minH={"100vh"}
      p="0"
      background="#111111"
      mb={"65px"}
      overflow={"hidden"}
    >
      {isLoading ? (
        <Flex w="100%" h="75vh" alignItems={"center"} justifyContent="center">
          <Spinner color="white" />
        </Flex>
      ) : (
        <>
          <Image
            src={`/images/${eventType}.png`}
            position="fixed"
            w={"100%"}
            objectFit={"cover"}
          />
          <VStack
            w="100%"
            p={"6"}
            spacing={4}
            mt={"40vh"}
            alignItems="flex-start"
          >
            {data &&
              data.data.map((item: any, index: number) => (
                <EventCard
                  key={item.id + index}
                  event={item}
                  st={item.event_st}
                  et={item.event_et}
                  width="100%"
                />
              ))}
          </VStack>
        </>
      )}
      <FooterNav sTabIndex={1} />
    </Container>
  );
}
