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

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import useScreenOrientation from "../hooks/useScreenOrientation";
import Counter from "../components/Counter";
import BackNavigation from "../components/BackNavigation";
import NextNavigator from "../components/NextNavigator";
import { useNavigate, useParams } from "react-router-dom";
import { event_details } from "./EventDetail";
import { getEventDetail } from "../hooks/useEvent";

export default function EventPass() {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState(event_details);
  const [counter, setCounter] = useState<number[]>([]);
  const [isReviewBtnDisabled, setIsReviewBtnDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (!event || !event.data) {
      fetchEvent();
    }
  }, []);

  useEffect(() => {
    if (event && event.data && event.data.event_passes) {
      let contr = event.data.event_passes.map((item: any) => {
        return 0;
      });
      setCounter(contr);
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

      {/* Section 1 */}
      <Stack maxWidth="100%" p={2} my={14}>
        <VStack my={6} px={4} alignItems="flex-start">
          <Text fontSize="xl" fontWeight={600} color="white" maxWidth="100%">
            Event Pass
          </Text>
          <Text fontSize="12px" color="#9D9D9D" my={3} maxWidth="100%">
            Select the event pass
          </Text>
        </VStack>
        {event && event.data && (
          <VStack
            justify="flex-start"
            align="flex-start"
            spacing={6}
            p={4}
            w="100%"
          >
            {event.data.event_passes.map((item: any, index: number) => (
              <>
                <Counter
                  key={index}
                  heading={item.pass_name}
                  subText={item.pass_description}
                  price={item.entry_price}
                  index={index}
                  counter={counter}
                  setCounter={setCounter}
                  isDisabled={!item.is_active}
                />
              </>
            ))}
          </VStack>
        )}
      </Stack>
      <Flex position={"fixed"} bottom={0} w="100%" background={"black"}>
        <Button
          w="100%"
          h="60px"
          mt={1}
          borderRadius={0}
          background={"#8155FE"}
          textColor="white"
          isDisabled={isReviewBtnDisabled}
          zIndex={1}
          onClick={() =>
            navigate(
              `/event/booking/confirm/${eventId}/${0}/${counter.join("-")}`
            )
          }
        >
          Review Booking
        </Button>
      </Flex>
    </Container>
  );
}
