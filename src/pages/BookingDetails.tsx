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
  Button,
  Divider,
} from "@chakra-ui/react";
import { booking_details } from "./ConfirmBooking";
import { BiTimeFive } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiBadgeCheck, HiCash } from "react-icons/hi";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function BookingDetails() {
  let storedUser = localStorage.getItem("user");
  let user = storedUser && JSON.parse(storedUser);
  const navigate = useNavigate();

  if (!booking_details) navigate("/");

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      p="0"
      pt={4}
      background="#8155FE"
      overflow={"hidden"}
    >
      <VStack alignItems={"center"} justifyContent="center" mt={6}>
        <Image src="/images/bookingConf.svg" />
        <Text fontSize={"18px"} fontWeight={700} color={"white"} py={4}>
          Event Booking Confirmed
        </Text>
        <Text color={"white"} w="80%" textAlign={"center"}>
          Your booking has been confirmed! Confirmation has also been sent to
          you at <strong>{user.email}</strong> &
          <strong>{`+91-${localStorage.getItem("phone_number")}`}</strong>
        </Text>
      </VStack>
      {booking_details && (
        <VStack
          background={"#1E1E1E"}
          mx={4}
          my={4}
          p={4}
          borderRadius={"4px"}
          spacing={2}
        >
          <Text color={"white"} textAlign={"center"}>
            {" "}
            Show this QR code given below to check-in
          </Text>
          <Image src={booking_details.qr_code} />
          <Divider py={2} borderColor={"gray.600"} />

          {booking_details.meta_data.bookedSlot &&
            booking_details.meta_data.bookedSlot.start_time && (
              <Flex
                alignItems={"center"}
                justifyContent="flex-start"
                gap={2}
                width="100%"
              >
                <BiTimeFive color="#8D8D8D" size={"20px"} />
                <VStack alignItems={"flex-start"} spacing={0}>
                  <Text fontSize={"12px"} fontWeight="600" color={"#9D9D9D"}>
                    Selected Time Slot
                  </Text>

                  <Text color={"white"}>{`${format(
                    new Date(
                      `${booking_details.meta_data.bookedSlot.start_time[0]}/${booking_details.meta_data.bookedSlot.start_time[1]}/${booking_details.meta_data.bookedSlot.start_time[2]} ${booking_details.meta_data.bookedSlot.start_time[3]}:${booking_details.meta_data.bookedSlot.start_time[4]}`
                    ),
                    "h:mm a"
                  )} - ${format(
                    new Date(
                      `${booking_details.meta_data.bookedSlot.end_time[0]}/${booking_details.meta_data.bookedSlot.end_time[1]}/${booking_details.meta_data.bookedSlot.end_time[2]} ${booking_details.meta_data.bookedSlot.end_time[3]}:${booking_details.meta_data.bookedSlot.end_time[4]}`
                    ),
                    "h:mm a"
                  )}`}</Text>
                </VStack>
              </Flex>
            )}
          <Flex
            alignItems={"center"}
            justifyContent="flex-start"
            gap={2}
            w="100%"
          >
            <FaUser color="#8D8D8D" size={"20px"} />
            <VStack alignItems={"flex-start"} spacing={0}>
              <Text fontSize={"12px"} fontWeight="600" color={"#9D9D9D"}>
                Selected Pass
              </Text>
              {!booking_details.meta_data.bookedPass ? (
                <Text color={"white"}>
                  {booking_details.female_count != 0
                    ? booking_details.female_count > 1
                      ? `${booking_details.female_count} Girls `
                      : `${booking_details.female_count} Girl `
                    : ""}
                  {booking_details.female_count != 0 ? (
                    <Text
                      as={"span"}
                      color="#8D8D8D"
                      fontWeight={600}
                      letterSpacing={1}
                      pr={1}
                    >
                      {`(₹${booking_details.meta_data.bookedSlot.cover_charges[1]})`}
                    </Text>
                  ) : (
                    ""
                  )}{" "}
                  {booking_details.male_count != 0
                    ? ` ${booking_details.male_count} Stag `
                    : ""}
                  {booking_details.male_count != 0 ? (
                    <Text
                      as={"span"}
                      color="#8D8D8D"
                      fontWeight={600}
                      letterSpacing={1}
                      pr={1}
                    >
                      {`(₹${booking_details.meta_data.bookedSlot.cover_charges[0]})`}
                    </Text>
                  ) : (
                    ""
                  )}{" "}
                  {booking_details.couple_count != 0
                    ? ` ${booking_details.couple_count} Couple `
                    : ""}
                  {booking_details.couple_count != 0 ? (
                    <Text
                      as={"span"}
                      color="#8D8D8D"
                      fontWeight={600}
                      letterSpacing={1}
                    >
                      {`(₹${booking_details.meta_data.bookedSlot.cover_charges[2]})`}
                    </Text>
                  ) : (
                    ""
                  )}
                </Text>
              ) : (
                <Text color={"white"}>
                  {booking_details.meta_data.bookedPass}
                </Text>
              )}
            </VStack>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent="flex-start"
            gap={2}
            w="100%"
          >
            <HiCash color="#8D8D8D" size={"20px"} />
            <VStack alignItems={"flex-start"} spacing={0}>
              <Text fontSize={"12px"} fontWeight="600" color={"#9D9D9D"}>
                Total Charges
              </Text>
              <Text
                color={"white"}
                letterSpacing={1.2}
              >{`₹${booking_details.meta_data.amount}`}</Text>
            </VStack>
          </Flex>
          {booking_details.payment_mode === "online" ? (
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
                Payment done online
              </Text>
            </Flex>
          ) : (
            <HStack>
              <Image src="/images/payment.svg" />
              <Text color={"#FF8730"} fontSize={"sm"} fontWeight={"600"}>
                Payment to be done at venue
              </Text>
            </HStack>
          )}
        </VStack>
      )}
      <Flex position={"fixed"} bottom={0} w="100%">
        <Button
          w="100%"
          h="60px"
          mt={6}
          borderRadius={0}
          background={"white"}
          onClick={() => navigate("/")}
        >
          Done
        </Button>
      </Flex>
    </Container>
  );
}
