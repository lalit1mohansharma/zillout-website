import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { format } from "date-fns";

const EventCard: React.FC<{
  event: any;
  st: number[];
  et: number[];
  width?: string;
}> = ({ event, st, et, width }) => {
  let date = new Date(
    `${event.event_date[0]}/${event.event_date[1]}/${event.event_date[2]}`
  );

  let startTime = new Date(`${st[0]}/${st[1]}/${st[2]} ${st[3]}:${st[4]}`);
  let endTime = new Date(`${et[0]}/${et[1]}/${et[2]} ${et[3]}:${et[4]}`);
  return (
    <Link as={RouterLink} to={`/event/detail/${event.id}`} w="100%">
      <Card
        w={width ? width : "75vw"}
        maxW={width ? width : "350px"}
        h={"160px"}
        background={"#212121"}
        flexDir="row"
      >
        <Flex direction="column" p={4} w={"57%"}>
          <Text
            background={
              "linear-gradient(95.58deg, #F97A33 12.18%, #E3BD36 86.93%), #FFFFFF"
            }
            fontSize={"11px"}
            fontWeight={"700"}
            backgroundClip="text"
            fill={"transparent"}
          >
            {event.event_type}
          </Text>
          <Text color={"white"} fontSize={"15px"} fontWeight={"600"}>
            {event.event_name}
          </Text>

          <Box
            my={4}
            background={
              "linear-gradient(90deg, #444444 0%, rgba(68, 68, 68, 0) 100%)"
            }
            h={"2px"}
          />
          <Text color={"white"} fontSize={"12px"} fontWeight={"500"} mb={1}>
            {format(date, "eee, dd MMM")}
          </Text>
          <Text color={"#9D9D9D"} fontSize={"12px"} fontWeight={"500"}>
            {`${format(startTime, "h:mm a")} - ${format(endTime, "h:mm a")}`}
          </Text>
        </Flex>
        <Flex
          w="20%"
          ml="-10%"
          background={
            "linear-gradient(90deg, rgba(33, 33, 33, 0) 0%, #212121 22.92%, #212121 47.4%, rgba(33, 33, 33, 0) 100%)"
          }
          zIndex={1}
        ></Flex>
        <Image src={event.image} w="43%" ml="-10%" objectFit={"cover"} />
      </Card>
    </Link>
  );
};

export default EventCard;
