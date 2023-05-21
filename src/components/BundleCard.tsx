import {
  Box,
  Card,
  Flex,
  HStack,
  Image,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { format } from "date-fns";
import { HiOutlineArrowRight } from "react-icons/hi";

const BundleCard: React.FC<{
  bundle: any;
  width?: string;
}> = ({ bundle, width }) => {
  return (
    <Link as={RouterLink} to={`/event/bundle/${bundle.eventType}`} w="100%">
      <Card
        w={width ? width : "95vw"}
        maxW={"100%"}
        h={"130px"}
        background={
          "linear-gradient(90deg, #ED9834 0%, rgba(129, 85, 254, 0) 100%)"
        }
        backgroundImage={`url(${bundle.bg_image})`}
        backgroundSize={"cover"}
        flexDir="row"
      >
        <Flex direction="column" p={4} w={"58%"}>
          <Text color={"white"} fontSize={"lg"} fontWeight={"600"}>
            {bundle.text}
          </Text>
          <Button size={"sm"} mt={2}>
            <Text fontWeight="700" fontSize={"sm"}>
              EXPLORE EVENTS&nbsp;
            </Text>
            <HiOutlineArrowRight />
          </Button>
        </Flex>
        <Image src={bundle.frontImage} w="40%" zIndex={1} />
      </Card>
    </Link>
  );
};

export default BundleCard;
