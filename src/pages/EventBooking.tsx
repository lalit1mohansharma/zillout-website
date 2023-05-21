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
} from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import BackNavigation from "../components/BackNavigation";
import NextNavigator from "../components/NextNavigator";
import { event_details } from "./EventDetail";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getEventDetail } from "../hooks/useEvent";
import { format } from "date-fns";
import EventCard from "../components/EventCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function EventBooking() {
  const navigate = useNavigate();
  const { eventId, slotNo } = useParams<{ eventId: string; slotNo: string }>();
  const [event, setEvent] = useState(event_details);
  const [slot, setSlot] = useState<any>();
  const [counter, setCounter] = useState<number[]>([0, 0, 0]);
  const [isReviewBtnDisabled, setIsReviewBtnDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (!event || !event.data) {
      fetchEvent();
    }
  }, []);

  useEffect(() => {
    if (event && event.data && slotNo) {
      setSlot(event.data.slots[slotNo]);
      console.log(slot);
    }
  }, [event]);

  useEffect(() => {
    if (counter.reduce((x, y) => x + y, 0) > 0) {
      setIsReviewBtnDisabled(false);
    } else {
      setIsReviewBtnDisabled(true);
    }
  }, [counter]);

  const fetchEvent = async () => {
    let details = await getEventDetail(eventId);
    setEvent(details);
  };

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      p="0"
      background="#111111"
      overflow={"hidden"}
    >
      <BackNavigation />

      {slot && (
        <Flex direction={"column"} my={14}>
          <Stack maxWidth="100%" p={2}>
            <VStack my={6} px={4}>
              <Text
                fontSize="xl"
                fontWeight={600}
                color="white"
                maxWidth="100%"
              >
                Who will be attending the event at{" "}
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
              <Text fontSize="12px" color="#9D9D9D" my={4} maxWidth="100%">
                Even though we aim to give you a hassle free experience, there
                might be situations in which cover charge may vary.
              </Text>
            </VStack>
            <VStack
              justify="flex-start"
              align="flex-start"
              spacing={6}
              p={4}
              w="100%"
            >
              <Counter
                heading="Girls"
                subText={
                  slot?.descriptions && slot.descriptions.length
                    ? slot?.descriptions[1]
                    : slot?.cover_charges[1] === 0
                    ? "Free Entry"
                    : `Cover charge of Rs.${slot?.cover_charges[1]} will have to be paid at the venue`
                }
                index={0}
                counter={counter}
                setCounter={setCounter}
              />
              <Divider py={2} borderColor={"gray.600"} />

              <Counter
                heading="Stag"
                subText={
                  slot.stags_allowed
                    ? slot?.descriptions && slot.descriptions.length
                      ? slot?.descriptions[0]
                      : slot?.cover_charges[0] === 0
                      ? "Free Entry"
                      : `Cover charge of Rs.${slot?.cover_charges[0]} will have to be paid at the venue`
                    : "No entry in this time slot"
                }
                isDisabled={!slot.stags_allowed}
                index={1}
                counter={counter}
                setCounter={setCounter}
              />
              <Divider py={2} borderColor={"gray.600"} />

              <Counter
                heading="Couples"
                subText={
                  slot?.descriptions && slot.descriptions.length
                    ? slot?.descriptions[2]
                    : slot?.cover_charges[2] === 0
                    ? "Free Entry"
                    : `Cover charge of Rs.${slot?.cover_charges[2]} will have to be paid at the venue`
                }
                index={2}
                counter={counter}
                setCounter={setCounter}
              />
            </VStack>
          </Stack>
          <Flex position={"fixed"} bottom={0} w="100%">
            <Button
              w="100%"
              h="60px"
              mt={6}
              borderRadius={0}
              background={"#8155FE"}
              textColor="white"
              isDisabled={isReviewBtnDisabled}
              onClick={() =>
                navigate(
                  `/event/booking/confirm/${eventId}/${slotNo}/${counter.join(
                    "-"
                  )}`
                )
              }
            >
              Review Booking
            </Button>
          </Flex>
        </Flex>
      )}
    </Container>
  );
}
