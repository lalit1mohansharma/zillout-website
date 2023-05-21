import React from "react";

import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import BackNavigation from "../components/BackNavigation";

export default function RefundPolicy() {
  return (
    <Container
      maxW={"100%"}
      p="0"
      background="#111111"
      overflow={"hidden"}
      textAlign="justify"
    >
      <BackNavigation heading="Cancellation and Refund Policy" />

      <Flex
        direction={"column"}
        mt={16}
        mb={10}
        p={[6, 6, 8, 28]}
        alignItems="flex-start"
      >
        <Text my={2} color="whiteAlpha.800">
          Any Capitalized terms used but not defined herein shall have the
          meaning assigned to them under the Terms of Use which govern your use
          of our website www.zillout.com(the <strong>“Website”</strong>) and our
          ‘ZillOut’ application for mobile and handheld devices (the{" "}
          <strong>“App”</strong>). The Website and the App are jointly referred
          to as the <strong>“Platform”</strong>.
        </Text>
        <Heading as="h3" size="md" color={"white"} mt={6}>
          Customer Cancellation
        </Heading>
        <Text my={2} color="whiteAlpha.800">
          As a general rule, customers shall not be entitled to cancel booking
          once placed. customers may choose to cancel booking at least 2 hours
          prior to the start of the booked slot and avail a 100% refund.
          However, subject to customer’s previous cancellation history, ZillOut
          reserves the right to deny any refund to customer pursuant to a
          cancellation initiated by customer even if the same is before 2 hours
          followed by suspension of account, as may be necessary in the sole
          discretion of ZillOut.{" "}
        </Text>
        <Text my={2} color="whiteAlpha.800">
          If customer cancels his/her booking after the booked slot has started,
          ZillOut shall have a right to collect a penalty of 100% of the booking
          amount for breach of contract terms as a compensation for the damages
          suffered by ZillOut, with a right to either not to refund the Order
          value in case customer’s booking is prepaid or recover from the
          customer’s subsequent booking in case his/her booking is postpaid, to
          compensate the merchants.
        </Text>
        <Heading as="h3" size="md" color={"white"} mt={6}>
          Non-Customer Cancellation
        </Heading>
        <Text mt={2} color="whiteAlpha.800">
          ZillOut reserves the right to collect a penalty for the booking
          constrained to be cancelled by ZillOut for reasons not attributable to
          ZillOut, including but not limited to:
        </Text>
        <UnorderedList textColor={"whiteAlpha.800"} pl={6}>
          <ListItem>
            in the event the customer doesn't reach the venue as per the booked
            slot.
          </ListItem>
          <ListItem>
            in the event of entering the venue through ZillOut booking and
            cancelling the booking thereafter.
          </ListItem>
        </UnorderedList>
        <Heading as="h3" size="md" color={"white"} mt={6}>
          Cancellation policy
        </Heading>
        <Text mt={2} color="whiteAlpha.800">
          The bookings made by customers using the Platform are non-cancellable
          and non-refundable except if refund is requested under the following
          conditions:
        </Text>
        <UnorderedList textColor={"whiteAlpha.800"} pl={6}>
          <ListItem>
            If the Merchant doesn't allow entry or cancels the booking due to
            reasons not attributable to the customer, including but not limited
            to the merchant being closed,merchant, merchant is overcrowded, etc.
          </ListItem>
          <ListItem>
            If ZillOut cancels the booking due to reasons not attributable to
            the customer.
          </ListItem>
        </UnorderedList>
        <Text my={2} color="whiteAlpha.800">
          ZillOut reserves the right to look into the cancellation request of
          the customer and determine if such cancellation request falls under
          the conditions mentioned above. If ZillOut is satisfied that the
          request and the same fulfils any of the aforesaid conditions, then
          ZillOut shall process the cancellation request and refund amounts to
          the customer.
        </Text>

        <Heading as="h3" size="md" color={"white"} mt={6}>
          Refunds
        </Heading>
        <Text my={2} color="whiteAlpha.800">
          Customers may be entitled to a refund for prepaid bookings. ZillOut
          retains the right to retain the penalty payable by the customer from
          the amount refundable to him/her.
        </Text>
        <Text my={1} color="whiteAlpha.800">
          Our decision on refunds shall be final and binding.
        </Text>
        <Text my={1} color="whiteAlpha.800">
          All refund amounts shall be credited to customer’s account as may be
          stipulated as per the payment mechanism of customer’s choice, the
          estimated timelines are detailed as below, in case customer don't
          choose to credit it to customer’s wallet with his/her ZillOut Account.
        </Text>
        <TableContainer my={4}>
          <Table variant="simple" border="1px solid white">
            <Thead background="#712FFF">
              <Tr>
                <Th textColor={"white"}>Process</Th>
                <Th textColor={"white"}>Payment Method</Th>
                <Th textColor={"white"}>Refund Source</Th>
                <Th textColor={"white"}>TAT</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  color="whiteAlpha.800"
                  rowSpan={3}
                  border="1px solid white"
                  whiteSpace={"break-spaces"}
                >
                  Booking / Cancellation / Compensation / Payment Failure
                </Td>
                <Td color="whiteAlpha.800">Net Banking</Td>
                <Td color="whiteAlpha.800">Source</Td>
                <Td color="whiteAlpha.800" whiteSpace={"break-spaces"}>
                  5-7 Business Days
                </Td>
              </Tr>
              <Tr>
                <Td color="whiteAlpha.800" whiteSpace={"break-spaces"}>
                  Debit / Credit cards
                </Td>
                <Td color="whiteAlpha.800">Source</Td>
                <Td color="whiteAlpha.800" whiteSpace={"break-spaces"}>
                  5 -7 Business Days
                </Td>
              </Tr>
              <Tr>
                <Td color="whiteAlpha.800">UPI</Td>
                <Td color="whiteAlpha.800">Source</Td>
                <Td color="whiteAlpha.800">2 Hours</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Heading as="h3" size="md" color={"white"} mt={6}>
          Contact Us
        </Heading>

        <Text my={2} color="whiteAlpha.800">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </Text>
        <UnorderedList textColor={"whiteAlpha.800"} pl={6}>
          <ListItem>By email: squad@zillout.com</ListItem>
          <ListItem>Phone number: 9380841878</ListItem>
        </UnorderedList>
      </Flex>
      <Footer />
    </Container>
  );
}
