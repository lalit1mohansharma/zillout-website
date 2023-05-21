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
  Button,
  Divider,
  Link,
  Spinner,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

import BackNavigation from "../components/BackNavigation";
import { useEvent } from "../hooks/useEvent";
import { MdEventAvailable, MdLocationOn } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

import { format } from "date-fns";

export let event_details: any;

export default function EventDetail() {
  const { eventId: event_id } = useParams<{ eventId: string }>();

  const { data: event, isLoading } = useEvent(event_id);
  const [imgColors, setImgColors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (event && event.data) {
      event_details = { ...event };
    }
  }, [event]);

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      p="0"
      background="#111111"
      overflow={"hidden"}
    >
      <BackNavigation />
      {isLoading ? (
        <Flex w="100%" h="75vh" alignItems={"center"} justifyContent="center">
          <Spinner color="white" />
        </Flex>
      ) : (
        <>
          {event.data ? (
            <>
              <Flex
                w="100%"
                background={
                  "linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, #111111 100%)"
                }
                alignItems="center"
                justifyContent={"center"}
                px={4}
                py={2}
                mt={20}
                flexDir="column"
              >
                <Flex flexDir="column" mb={2} p={4} w={"100%"}>
                  <Image
                    src={event.data.image}
                    objectFit="fill"
                    minW={"70vw"}
                    minH={"35vh"}
                    maxH={"50vh"}
                    boxShadow={`0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)`}
                  />
                </Flex>
                <Text color={"white"} fontSize={"xl"} fontWeight={"600"} mt={4}>
                  {event.data.event_name}
                </Text>
                <Text
                  background={
                    "linear-gradient(95.58deg, #F97A33 12.18%, #E3BD36 86.93%), #FFFFFF"
                  }
                  fontSize={"12px"}
                  fontWeight={"700"}
                  backgroundClip="text"
                  fill={"transparent"}
                  letterSpacing={0.5}
                >
                  {event.data.event_type}
                </Text>
                <Link
                  as={RouterLink}
                  to={
                    event.data.ticketing_event
                      ? `/event/booking/pass/${event_id}`
                      : `/event/booking/${event_id}`
                  }
                  w="100%"
                >
                  <Button
                    w="98%"
                    h="50px"
                    mt={6}
                    mx={1}
                    background={"#8155FE"}
                    textColor="white"
                  >
                    Book Now
                  </Button>
                </Link>
                {!event.data.ticketing_event && (
                  <HStack mt={3}>
                    <Image src="/images/payment.svg" />
                    <Text color={"#9D9D9D"} fontSize={"sm"} fontWeight={"600"}>
                      Pay at venue option available
                    </Text>
                  </HStack>
                )}
                <Divider mt="4" mb={2} borderColor={"gray.500"} />
              </Flex>
              <Flex
                py={4}
                px={5}
                gap={6}
                mb="10"
                flexWrap="wrap"
                alignItems={"flex-start"}
                justifyContent="flex-start"
              >
                <HStack alignItems={"center"} justifyContent="center">
                  <Icon as={MdEventAvailable} fontSize="28px" color="#9D9D9D" />
                  <VStack alignItems={"flex-start"} spacing={0}>
                    <Text color={"#9D9D9D"} fontSize="sm">
                      Event Date
                    </Text>
                    <Text color={"white"} fontWeight={600}>
                      {format(
                        new Date(
                          `${event.data.booking_start_time[0]}/${event.data.booking_start_time[1]}/${event.data.booking_start_time[2]} ${event.data.booking_start_time[3]}:${event.data.booking_start_time[4]}`
                        ),
                        "eee, dd MMM"
                      )}
                    </Text>
                  </VStack>
                </HStack>
                <HStack alignItems={"center"} justifyContent="center">
                  <Icon as={BiTimeFive} fontSize="28px" color="#9D9D9D" />
                  <VStack alignItems={"flex-start"} spacing={0}>
                    <Text color={"#9D9D9D"} fontSize="sm">
                      Event Time
                    </Text>
                    <Text color={"white"} fontWeight={600}>
                      {format(
                        new Date(
                          `${event.data.booking_start_time[0]}/${event.data.booking_start_time[1]}/${event.data.booking_start_time[2]} ${event.data.booking_start_time[3]}:${event.data.booking_start_time[4]}`
                        ),
                        "h:mm a"
                      )}{" "}
                      -{" "}
                      {format(
                        new Date(
                          `${event.data.booking_end_time[0]}/${event.data.booking_end_time[1]}/${event.data.booking_end_time[2]} ${event.data.booking_end_time[3]}:${event.data.booking_end_time[4]}`
                        ),
                        "h:mm a"
                      )}
                    </Text>
                  </VStack>
                </HStack>
                <HStack alignItems={"center"} justifyContent="center">
                  <Icon as={MdLocationOn} fontSize="28px" color="#9D9D9D" />
                  <VStack alignItems={"flex-start"} spacing={0}>
                    <Text color={"#9D9D9D"} fontSize="sm">
                      Event Venue
                    </Text>
                    <Text color={"white"}>
                      <strong>{event.data.pub_name}</strong>
                      {", "}
                      {event.data.pub_location}
                    </Text>
                  </VStack>
                </HStack>
                <VStack alignItems={"flex-start"} w="100%">
                  <Text color={"white"} fontWeight={700}>
                    Event Description
                  </Text>
                  <Text color={"whiteAlpha.700"} fontSize={"sm"}>
                    {event.data.description}
                  </Text>
                </VStack>
                <VStack alignItems={"flex-start"} w="100%">
                  <Text color={"white"} fontWeight={700}>
                    Event Rules
                  </Text>
                  <Text color={"whiteAlpha.700"} fontSize={"sm"}>
                    {event.data.stnc[0]}
                  </Text>
                  <UnorderedList px={4}>
                    {event.data.stnc.map((item: string, index: number) => (
                      <>
                        {index > 0 && (
                          <ListItem
                            key={index}
                            color={"whiteAlpha.700"}
                            fontSize={"sm"}
                          >
                            {item}
                          </ListItem>
                        )}
                      </>
                    ))}
                  </UnorderedList>
                </VStack>
              </Flex>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </Container>
  );
}
