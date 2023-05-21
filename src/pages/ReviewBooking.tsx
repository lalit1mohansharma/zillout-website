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

import { useEffect } from "react";
import useScreenOrientation from "../hooks/useScreenOrientation";
import Counter from "../components/Counter";
import BackNavigation from "../components/BackNavigation";
import NextNavigator from "../components/NextNavigator";
import EventCard from "../components/EventCard";

export default function ReviewBooking() {
  const [isMobileView] = useMediaQuery("(max-width: 820px)");
  const orientation = useScreenOrientation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      p="0"
      pt={4}
      background="#111111"
      overflow={"hidden"}
    >
      <BackNavigation />

      {/* Section 1 */}
    </Container>
  );
}
