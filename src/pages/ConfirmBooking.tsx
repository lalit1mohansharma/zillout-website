import React, { useEffect, useState } from "react";
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
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import BackNavigation from "../components/BackNavigation";
import { useNavigate, useParams } from "react-router-dom";
import { event_details } from "./EventDetail";
import { getEventDetail } from "../hooks/useEvent";
import EventCard from "../components/EventCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BiTimeFive } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiCash, HiBadgeCheck } from "react-icons/hi";
import { GiTicket } from "react-icons/gi";
import useRazorpay from "react-razorpay";

import { format } from "date-fns";
import API from "../helpers/api";

export let booking_details: any;
function ConfirmBooking() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const Razorpay = useRazorpay();

  const { eventId, slotNo, counter } = useParams<{
    eventId: string;
    slotNo: string;
    counter: string;
  }>();
  const [event, setEvent] = useState(event_details);
  const [counterList, setCounterList] = useState<string[]>([]);

  const [finalAmount, setFinalAmount] = useState<number>(0);

  useEffect(() => {
    if (!event || !event.data) {
      fetchEvent();
    }
    if (counter) setCounterList(counter?.split("-"));

    if (eventId && slotNo && counter) {
      booking_details = {
        eventId,
        slotNo,
        counter,
      };
      console.log(booking_details);
    }
  }, []);

  useEffect(() => {
    setAmount();
  }, [counterList, event]);

  const fetchEvent = async () => {
    let details = await getEventDetail(eventId);
    setEvent(details);
  };

  const setAmount = () => {
    let amount = 0;
    if (
      event &&
      event.data &&
      event.data.slots &&
      event.data.slots.length &&
      slotNo &&
      counter
    ) {
      let cover_charges = event.data.slots[slotNo].cover_charges;
      amount =
        cover_charges[0] * +counterList[1] +
        cover_charges[1] * +counterList[0] +
        cover_charges[2] * +counterList[2];
    } else if (event && event.data && event.data.event_passes) {
      counterList.forEach((item, index) => {
        if (+item > 0) {
          amount = amount + event.data.event_passes[index].entry_price * +item;
        }
      });
    }

    setFinalAmount(amount);
  };

  const onConfirmBooking = () => {
    const user = localStorage.getItem("user");
    const userId = localStorage.getItem("userId");
    if (!user || !userId) return navigate("/signin");

    if (!localStorage.getItem("is_phone_verified"))
      return navigate("/verify-phone");

    if (event.data.payment_mode === "online") onOpen();
    else createBooking("offline");
  };

  const createBooking = async (mode: string) => {
    if (mode === "online") {
      let pass_count: any = [];
      counterList.forEach((item, index) => {
        if (+item > 0) {
          pass_count.push({
            pass_name: event.data.event_passes[index].pass_name,
            count: item,
          });
        }
      });
      const { data, status } = await API.post<any>("api/v1/rbzo/bookings", {
        pass_count: pass_count,
        user_id: localStorage.getItem("userId"),
        token: localStorage.getItem("token"),
        event_id: eventId,
        payment_mode: mode,
      });

      if (status === 200 && data.data.order_id) {
        let storedUser = localStorage.getItem("user");
        let user = storedUser && JSON.parse(storedUser);
        const options = {
          key: data.data.api_key,
          amount: finalAmount.toString(),
          currency: "INR",
          name: "ZillOut",
          description: "Transaction",
          image: "https://zillout.com/logo.png",
          order_id: data.data.order_id,
          handler: function (response: any) {
            confirmOnlineBooking(response);
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: localStorage.getItem("phone_number") || "",
          },
          theme: {
            color: "#8155FE",
          },
        };
        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response: any) {
          alert(response.error.description);
        });

        rzp1.open();
      }
    } else {
      const { data, status } = await API.post<any>("api/v1/rbzo/bookings", {
        male_count: counterList[1],
        female_count: counterList[0],
        couple_count: counterList[2],
        user_id: localStorage.getItem("userId"),
        token: localStorage.getItem("token"),
        event_id: eventId,
        slot_id: slotNo,
        payment_mode: mode,
      });

      if (status === 200 && data.data) {
        booking_details = data.data;
        navigate("/booking-details");
      }
    }
  };

  const confirmOnlineBooking = async (res: any) => {
    const { data, status } = await API.post<any>(
      "api/v1/rbzo/bookings/confirm",
      {
        payment_id: res.razorpay_payment_id,
        order_id: res.razorpay_order_id,
        signature: res.razorpay_signature,
      }
    );

    if (status === 200 && data.data) {
      booking_details = data.data;
      navigate("/booking-details");
    }
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
      {event && event.data && slotNo && counterList && (
        <>
          <Stack maxWidth="100%" p={2} my={14}>
            <VStack my={6} px={4} alignItems="flex-start">
              <Text
                fontSize="xl"
                fontWeight={600}
                color="white"
                maxWidth="100%"
              >
                Review Booking
              </Text>
            </VStack>
            <VStack
              justify="flex-start"
              align="flex-start"
              spacing={6}
              p={4}
              w="100%"
            >
              <EventCard
                event={event.data}
                st={
                  event.data.slots && event.data.slots.length
                    ? event.data.slots[0].start_time
                    : event.data.booking_start_time
                }
                et={
                  event.data.slots && event.data.slots.length
                    ? event.data.slots[event.data.slots.length - 1].end_time
                    : event.data.booking_end_time
                }
                width={"100%"}
              />
              <Divider my="2" borderColor={"gray.500"} />
              <VStack align={"flex-start"} spacing={4}>
                <Text color={"#9D9D9D"} fontWeight="700">
                  BOOKING DETAILS
                </Text>
                {event.data.slots && event.data.slots.length && (
                  <>
                    <Flex
                      alignItems={"flex-start"}
                      justifyContent="center"
                      gap={2}
                    >
                      <Icon
                        as={BiTimeFive}
                        color="#8D8D8D"
                        fontSize={"20px"}
                        mt={2}
                      />
                      <VStack alignItems={"flex-start"} spacing={0}>
                        <Text
                          fontSize={"12px"}
                          fontWeight="600"
                          color={"#9D9D9D"}
                        >
                          Selected Time Slot
                        </Text>
                        <Text color={"white"}>{`${format(
                          new Date(
                            `${event.data.slots[slotNo].start_time[0]}/${event.data.slots[slotNo].start_time[1]}/${event.data.slots[slotNo].start_time[2]} ${event.data.slots[slotNo].start_time[3]}:${event.data.slots[slotNo].start_time[4]}`
                          ),
                          "h:mm a"
                        )} - ${format(
                          new Date(
                            `${event.data.slots[slotNo].end_time[0]}/${event.data.slots[slotNo].end_time[1]}/${event.data.slots[slotNo].end_time[2]} ${event.data.slots[slotNo].end_time[3]}:${event.data.slots[slotNo].end_time[4]}`
                          ),
                          "h:mm a"
                        )}`}</Text>
                      </VStack>
                    </Flex>
                    <Flex
                      alignItems={"flex-start"}
                      justifyContent="flex-start"
                      gap={2}
                    >
                      <Icon
                        as={FaUser}
                        color="#8D8D8D"
                        fontSize={"20px"}
                        mt={2}
                      />
                      <VStack alignItems={"flex-start"} spacing={0}>
                        <Text
                          fontSize={"12px"}
                          fontWeight="600"
                          color={"#9D9D9D"}
                        >
                          Selected Pass
                        </Text>
                        <Text color={"white"}>
                          {counterList[0] != "0"
                            ? +counterList[0] > 1
                              ? `${counterList[0]} Girls `
                              : `${counterList[0]} Girl `
                            : ""}
                          {counterList[0] != "0" ? (
                            <Text
                              as={"span"}
                              color="#8D8D8D"
                              fontWeight={600}
                              letterSpacing={1}
                              pr={1}
                            >
                              {`(₹${event.data?.slots[slotNo]?.cover_charges[1]})`}
                            </Text>
                          ) : (
                            ""
                          )}{" "}
                          {counterList[1] != "0"
                            ? ` ${counterList[1]} Stag `
                            : ""}
                          {counterList[1] != "0" ? (
                            <Text
                              as={"span"}
                              color="#8D8D8D"
                              fontWeight={600}
                              letterSpacing={1}
                              pr={1}
                            >
                              {`(₹${event.data?.slots[slotNo]?.cover_charges[0]})`}
                            </Text>
                          ) : (
                            ""
                          )}{" "}
                          {counterList[2] != "0"
                            ? ` ${counterList[2]} Couple `
                            : ""}
                          {counterList[2] != "0" ? (
                            <Text
                              as={"span"}
                              color="#8D8D8D"
                              fontWeight={600}
                              letterSpacing={1}
                            >
                              {`(₹${event.data?.slots[slotNo]?.cover_charges[2]})`}
                            </Text>
                          ) : (
                            ""
                          )}
                        </Text>
                      </VStack>
                    </Flex>
                  </>
                )}
                {event.data.event_passes &&
                  event.data.event_passes.length > 0 && (
                    <Flex
                      alignItems={"flex-start"}
                      justifyContent="flex-start"
                      gap={2}
                    >
                      <GiTicket color="#8D8D8D" size={"28px"} />
                      <VStack alignItems={"flex-start"} spacing={0}>
                        <Text
                          fontSize={"12px"}
                          fontWeight="600"
                          color={"#9D9D9D"}
                        >
                          Selected Pass(s)
                        </Text>
                        {event.data.event_passes.map(
                          (item: any, index: number) => (
                            <>
                              {+counterList[index] != 0 && (
                                <Text color={"white"}>
                                  {item.pass_name}{" "}
                                  <strong>x {counterList[index]}</strong>
                                </Text>
                              )}
                            </>
                          )
                        )}
                      </VStack>
                    </Flex>
                  )}
                <Flex
                  alignItems={"flex-start"}
                  justifyContent="flex-start"
                  gap={2}
                >
                  <HiCash color="#8D8D8D" size={"28px"} />
                  <VStack alignItems={"flex-start"} spacing={0}>
                    <Text fontSize={"12px"} fontWeight="600" color={"#9D9D9D"}>
                      Total Charges
                    </Text>
                    <Text
                      color={"white"}
                      letterSpacing={1.2}
                      fontWeight="600"
                    >{`₹${finalAmount}`}</Text>
                  </VStack>
                </Flex>
              </VStack>
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
              onClick={onConfirmBooking}
            >
              Confirm Booking
            </Button>
          </Flex>

          <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent
              background={"#212121"}
              textColor="white"
              borderRadius={"24px 24px 0px 0px"}
              height="fit-content"
            >
              <DrawerHeader my={4}>Finalise booking</DrawerHeader>
              <DrawerBody pb={20}>
                <VStack>
                  {(event.data.payment_mode === "online" ||
                    event.data.payment_mode === "both") && (
                    <HStack w="100%">
                      <VStack
                        w="80%"
                        align={"flex-start"}
                        spacing={1}
                        onClick={() => createBooking("online")}
                      >
                        <Text
                          fontSize="md"
                          fontWeight={600}
                          color="white"
                          height="24px"
                        >
                          Pay online
                        </Text>
                        <Flex
                          alignItems={"center"}
                          justifyContent="center"
                          color="#1FAF48"
                          gap={1}
                        >
                          <HiBadgeCheck />
                          <Text
                            fontSize="12px"
                            fontWeight={500}
                            color="#1FAF48"
                            my={1}
                            maxWidth="100%"
                          >
                            Get guaranteed entry
                          </Text>
                        </Flex>
                      </VStack>
                      <ArrowForwardIcon color={"white"} w={6} h={6} />
                    </HStack>
                  )}
                  {event.data.payment_mode === "both" && (
                    <Divider py={2} borderColor={"gray.600"} />
                  )}

                  {(event.data.payment_mode === "offline" ||
                    event.data.payment_mode === "both") && (
                    <HStack w="100%" pt={2}>
                      <VStack
                        w="80%"
                        align={"flex-start"}
                        spacing={1}
                        onClick={() => createBooking("offline")}
                      >
                        <Text
                          fontSize="md"
                          fontWeight={600}
                          color="white"
                          height="24px"
                        >
                          Pay at venue
                        </Text>
                        <Text
                          fontSize="12px"
                          fontWeight={500}
                          color="#9D9D9D"
                          my={2}
                          maxWidth="100%"
                        >
                          Pay at venue during check in
                        </Text>
                      </VStack>
                      <ArrowForwardIcon color={"white"} w={6} h={6} />
                    </HStack>
                  )}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Container>
  );
}

export default ConfirmBooking;
