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
  Stack,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { ImManWoman } from "react-icons/im";

import useScreenOrientation from "../hooks/useScreenOrientation";
import Counter from "../components/Counter";
import BackNavigation from "../components/BackNavigation";
import PhotoGallary from "../components/PhotoGallary";
import { usePub } from "../hooks/usePub";
import EventCard from "../components/EventCard";

export default function PubDetails() {
  const [isMobileView] = useMediaQuery("(max-width: 820px)");
  const orientation = useScreenOrientation();

  const { pubId: pub_id } = useParams<{ pubId: string }>();

  const { data: pub, isLoading } = usePub(pub_id);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
      {pub && pub.data && (
        <Flex direction={"column"} mt={20}>
          <PhotoGallary images={pub.data.pub_detail.pub_images} />

          <VStack alignItems={"flex-start"} px={4} py={2}>
            <Flex alignItems={"flex-start"} mb={2} w="100%">
              <VStack alignItems={"flex-start"} spacing={1} maxW="85%">
                <Text
                  color="#9D9D9D"
                  fontWeight={700}
                  letterSpacing={2}
                  textTransform="uppercase"
                >
                  {pub.data.pub_detail.type}
                </Text>
                <Text
                  color="white"
                  fontWeight={600}
                  letterSpacing={1}
                  fontSize="xl"
                >
                  {pub.data.pub_detail.name}
                </Text>
              </VStack>
              {pub.data.pub_detail.rating && (
                <Stack spacing={-6} alignItems="center" ml="auto" mr={2}>
                  <Image src={"/images/rating.svg"} />
                  <Text pr={0.5} pt={0.5} fontWeight="600" fontSize="sm">
                    {pub.data.pub_detail.rating}
                  </Text>
                </Stack>
              )}
            </Flex>

            <Divider my="2" borderColor={"gray.500"} />

            <HStack spacing={2}>
              <Icon as={MdLocationOn} fontSize="16px" color="#9D9D9D" />
              <Text color={"#9D9D9D"} fontSize="12px">
                {pub.data.pub_detail.address}
              </Text>
            </HStack>
            {/* {pub.data.event_res && (
              <HStack spacing={2}>
                <Icon as={ImManWoman} fontSize="16px" color="#9D9D9D" />
                <Text color={"#9D9D9D"} fontSize="12px">
                  {pub.data.pub_detail.address}
                </Text>
              </HStack>
            )} */}
            <Tabs w="100%" py={4}>
              <TabList borderBottomColor={"#363636"}>
                <Tab
                  color={"#9D9D9D"}
                  _selected={{
                    color: "white",
                    borderBottomWidth: "4px",
                    borderBottomColor: "white",
                  }}
                >
                  Details
                </Tab>
                <Tab
                  color={"#9D9D9D"}
                  _selected={{
                    color: "white",
                    borderBottomWidth: "4px",
                    borderBottomColor: "white",
                  }}
                >
                  Events
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Text fontSize={"md"} fontWeight="600" color={"white"} mb={4}>
                    Speciality
                  </Text>
                  {pub.data.pub_detail.tags.map((item: any, index: number) => (
                    <Flex key={index} alignItems={["flex-start"]} mb={4}>
                      <Image src={`/images/${item.tag_name}.svg`} w="6" />
                      <VStack alignItems={"flex-start"} ml={4} spacing={0}>
                        <Text
                          fontSize={"14px"}
                          fontWeight="600"
                          color={"white"}
                          lineHeight="1.5rem"
                        >
                          {item.tag_name}
                        </Text>
                        <Text color={"whiteAlpha.600"} fontSize="12px">
                          {item.description}
                        </Text>
                      </VStack>
                    </Flex>
                  ))}
                  <Text fontSize={"md"} fontWeight="600" color={"white"} mb={2}>
                    About this place
                  </Text>
                  <Text color={"whiteAlpha.600"} fontSize="12px">
                    {pub.data.pub_detail.description}
                  </Text>
                  <Text
                    fontSize={"md"}
                    fontWeight="600"
                    color={"white"}
                    mb={2}
                    mt={4}
                  >
                    Location
                  </Text>
                  <Text color={"whiteAlpha.600"} fontSize="12px">
                    {pub.data.pub_detail.address}
                  </Text>
                </TabPanel>
                <TabPanel>
                  {pub.data.event_res ? (
                    <Flex py={4}>
                      <EventCard
                        event={pub.data.event_res}
                        st={pub.data.event_res.event_st}
                        et={pub.data.event_res.event_et}
                        width={"100%"}
                      />
                    </Flex>
                  ) : (
                    <VStack textAlign={"center"}>
                      <Image src="/images/nothing.png" />
                      <Text color={"whiteAlpha.700"}>
                        Am I too drunk? <br></br>
                        My antennas can’t find anything here
                      </Text>
                    </VStack>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </Flex>
      )}
    </Container>
  );
}
