import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  VStack,
  Text,
  useMediaQuery,
  Button,
  Divider,
  Stack,
  Circle,
} from "@chakra-ui/react";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";

import BackNavigation from "../components/BackNavigation";
import { event_details } from "./EventDetail";
import { getEventDetail } from "../hooks/useEvent";
import { format } from "date-fns";

export default function EventTiming() {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState(event_details);

  useEffect(() => {
    if (!event || !event.data) {
      fetchEvent();
    }
  }, []);

  const fetchEvent = async () => {
    let details = await getEventDetail(eventId);
    setEvent(details);
  };

  const getSlotDescription = (slot: any) => {
    let description = "";
    if (slot.descriptions && slot.descriptions.length) {
      description = "";
    } else if (
      slot.cover_charges[0] === 0 &&
      slot.cover_charges[1] === 0 &&
      slot.cover_charges[2] === 0
    ) {
      description = "Free Entry";
    } else {
      if (slot.cover_charges[1] > 0) {
        description =
          description +
          `Cover charge of Rs.${slot.cover_charges[1]} for girls, `;
      } else {
        description = description + "Free entry for girls, ";
      }
      if (slot.cover_charges[0] > 0) {
        description =
          description +
          `cover charge of Rs.${slot.cover_charges[0]} for stag, `;
      } else {
        description = description + "free entry for stag, ";
      }
      if (slot.cover_charges[2] > 0) {
        description =
          description +
          `cover charge of Rs.${slot.cover_charges[2]} for couples`;
      } else {
        description = description + "free entry for couples";
      }
    }
    return description;
  };

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      background="#111111"
      p={0}
      overflow={"hidden"}
    >
      <BackNavigation />

      {/* Section 1 */}
      <Stack maxWidth="100%" p={2} my={12}>
        <Text
          fontSize="2xl"
          fontWeight={600}
          color="white"
          my={8}
          px={4}
          maxWidth="100%"
        >
          When will you arrive at the event?
        </Text>

        {event &&
          event.data &&
          event.data.slots &&
          event.data.slots.map((slot: any, index: number) => (
            <Link
              key={index}
              as={RouterLink}
              to={`/event/booking/${eventId}/${index}`}
            >
              <VStack
                justify="flex-start"
                align="flex-start"
                spacing={2}
                p={4}
                pr={0}
                flex="1"
              >
                <Flex alignItems={"center"} w="100%" gap={4}>
                  <VStack w="80%" align={"flex-start"} p={0}>
                    <Text
                      fontSize="md"
                      fontWeight={600}
                      color="white"
                      height="24px"
                    >
                      {`${format(
                        new Date(
                          `${slot.start_time[0]}/${slot.start_time[1]}/${slot.start_time[2]} ${slot.start_time[3]}:${slot.start_time[4]}`
                        ),
                        "h:mm a"
                      )} - ${format(
                        new Date(
                          `${slot.end_time[0]}/${slot.end_time[1]}/${slot.end_time[2]} ${slot.end_time[3]}:${slot.end_time[4]}`
                        ),
                        "h:mm a"
                      )}`}
                    </Text>
                    <Text
                      fontSize="12px"
                      color="#9D9D9D"
                      my={4}
                      maxWidth="100%"
                    >
                      {getSlotDescription(slot)}
                    </Text>
                  </VStack>
                  <ArrowForwardIcon color={"white"} w={7} h={7} />
                </Flex>
                <Divider py={2} w="90%" borderColor={"gray.500"} />
              </VStack>
            </Link>
          ))}
      </Stack>
    </Container>
  );
}
