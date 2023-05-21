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
  Tag,
  TagLabel,
  Spinner,
  Divider,
  Link,
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import PubCard from "../components/PubCard";
import { useLanding } from "../hooks/useLanding";
import FooterNav from "../components/FooterNav";
import { useParams, Link as RouterLink } from "react-router-dom";
import BundleCard from "../components/BundleCard";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function HomePage() {
  let storedUser = localStorage.getItem("user");
  let user = storedUser && JSON.parse(storedUser);

  const { tab } = useParams<{ tab: string }>();
  const [sTabIndex, setSTabIndex] = useState(0);

  const [pageNo, setPageNo] = useState(1);
  const [filter, setFilter] = useState("any");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { data, refetch } = useLanding(pageNo, filter);
  const [bundle, setBundle] = useState();
  const [events, setEvents] = useState([]);
  const [pubs, setPubs] = useState<any[]>([]);

  useEffect(() => {
    if (data && data.data) {
      setIsLoading(false);
      setBundle(data.data.bundled_card);
      setEvents(data.data.featured_events);
      setPubs([...pubs, ...data.data.pub_home_cards]);
      if (data.data.pub_home_cards && !data.data.pub_home_cards.length)
        setHasMore(false);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [pageNo]);

  const fetchMore = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    if (tab) {
      switch (tab) {
        case "home":
          setSTabIndex(0);
          break;
        case "events":
          setSTabIndex(1);
          break;
        case "user":
          setSTabIndex(2);
          break;
        default:
          setSTabIndex(0);
      }
    }
  }, [tab]);

  useEffect(() => {
    refetch();
  }, [filter]);

  return (
    <Container
      maxW={"100%"}
      minH={"100vh"}
      p="0"
      background="#111111"
      overflow={"hidden"}
    >
      {sTabIndex == 0 && (
        <>
          <Flex
            w={"100%"}
            h={"25vh"}
            as={"section"}
            background={
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 57.14%, #111111 100%), linear-gradient(141.96deg, #A288FF 0%, #1C0A59 100%);"
            }
          >
            <VStack alignItems={"flex-start"} justifyContent="center" mx={6}>
              <Image
                src="/images/logo.svg"
                h={["22px", "22px", "25px", "40px"]}
              />
              <Text color={"#BCAAFF"} fontSize={"md"}>
                Find Pubs, Book Parties & Get Guaranteed Entry
              </Text>
            </VStack>
          </Flex>

          {isLoading ? (
            <Flex
              w="100%"
              h="75vh"
              alignItems={"center"}
              justifyContent="center"
            >
              <Spinner color="white" />
            </Flex>
          ) : (
            <>
              {/* Section 2 */}
              {bundle && (
                <Flex as={"section"} w={"100%"}>
                  <Flex
                    w="100%"
                    overflowX={"scroll"}
                    sx={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    px={6}
                    py={2}
                  >
                    <BundleCard bundle={bundle} />
                  </Flex>
                </Flex>
              )}

              {/* Section 3 */}
              <Flex as={"section"} w={"100%"}>
                <VStack w="100%" alignItems={"flex-start"}>
                  <Text
                    color={"white"}
                    fontSize={"lg"}
                    fontWeight={"600"}
                    mx={6}
                    mt={4}
                  >
                    Top Events
                  </Text>
                  <Flex
                    w="100%"
                    overflowX={"scroll"}
                    sx={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {events.map((event: any, index: number) => (
                      <HStack key={index} spacing={2} ml={6} mt={1} mb={2}>
                        <EventCard
                          key={event.id + index}
                          event={event}
                          st={event.event_st}
                          et={event.event_et}
                        />
                      </HStack>
                    ))}
                  </Flex>
                </VStack>
              </Flex>
              {/* Section 4 */}

              <Flex as={"section"} w={"100%"} mb={"65px"}>
                <InfiniteScroll
                  dataLength={pubs?.length}
                  next={() => fetchMore()}
                  hasMore={hasMore}
                  loader={
                    <Box
                      w={"100%"}
                      h="50vh"
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Spinner color="white" />
                    </Box>
                  }
                  scrollableTarget="pageScroll"
                >
                  <VStack w="100%" alignItems={"flex-start"}>
                    <Text
                      color={"white"}
                      fontSize={"xl"}
                      fontWeight={"600"}
                      mx={6}
                      mt={4}
                      mb={1}
                    >
                      Places to explore
                    </Text>
                    <HStack>
                      <Tag
                        size={"md"}
                        key={"md"}
                        borderRadius="full"
                        variant="outline"
                        colorScheme={"whiteAlpha"}
                        color={filter !== "any" ? "black" : "white"}
                        background={filter !== "any" ? "white" : "#212121"}
                        mx={6}
                        px={4}
                        py={1.5}
                        onClick={() => {
                          setIsLoading(true);
                          setPageNo(1);
                          setPubs([]);
                          setHasMore(true);
                          if (filter === "any") setFilter("Has Event today");
                          else setFilter("any");
                        }}
                      >
                        <TagLabel fontSize={"12px"} fontWeight={"400"}>
                          Has Event Today
                        </TagLabel>
                      </Tag>
                    </HStack>
                    {pubs.map((pub: any, index) => (
                      <VStack key={index} px={6} py={2}>
                        <PubCard key={index} pub={pub} />
                      </VStack>
                    ))}
                  </VStack>
                </InfiniteScroll>
              </Flex>
            </>
          )}
        </>
      )}

      {sTabIndex === 1 && (
        <VStack
          w="100%"
          p={"6"}
          spacing={4}
          mt={14}
          mb={"65px"}
          alignItems="flex-start"
        >
          <Box
            background={"#0D1218"}
            position="fixed"
            top={"0px"}
            zIndex={2}
            py={4}
            w="100%"
          >
            <Text
              color={"white"}
              fontSize="xl"
              fontWeight={700}
              textAlign="start"
              mt={2}
            >
              Events
            </Text>
          </Box>
          {events.map((item: any, index) => (
            <EventCard
              key={index}
              event={item}
              st={item.event_st}
              et={item.event_et}
              width="100%"
            />
          ))}
        </VStack>
      )}

      {sTabIndex === 2 && (
        <VStack w="100%" p={"6"} mt={10} alignItems="flex-start" h={"90vh"}>
          <Text
            color={"white"}
            fontSize="2xl"
            fontWeight={700}
            letterSpacing={1}
          >
            {user?.name ? user.name : "Hi"}
          </Text>
          {user ? (
            <>
              <Link as={RouterLink} to="/profile" w="100%">
                <VStack spacing={6} pt={10} w="100%" alignItems={"flex-start"}>
                  <Flex w="100%" justifyContent={"center"} alignItems="center">
                    <Text color={"white"} fontWeight={500}>
                      Account Details
                    </Text>
                    <ChevronRightIcon
                      ml="auto"
                      color={"white"}
                      fontSize="2xl"
                    />
                  </Flex>
                  <Divider borderColor={"gray.600"} />
                </VStack>
              </Link>
              <Link as={RouterLink} to="/user/bookings" w="100%">
                <VStack spacing={5} pt={3} w="100%" alignItems={"flex-start"}>
                  <Flex w="100%" justifyContent={"center"} alignItems="center">
                    <Text color={"white"} fontWeight={500}>
                      Booking Details
                    </Text>
                    <ChevronRightIcon
                      ml="auto"
                      color={"white"}
                      fontSize="2xl"
                    />
                  </Flex>
                </VStack>
              </Link>
            </>
          ) : (
            <Link as={RouterLink} to="/signin" w="100%">
              <VStack spacing={6} pt={10} w="100%" alignItems={"flex-start"}>
                <Flex w="100%" justifyContent={"center"} alignItems="center">
                  <Text color={"white"} fontWeight={500}>
                    Sign In
                  </Text>
                  <ChevronRightIcon ml="auto" color={"white"} fontSize="2xl" />
                </Flex>
              </VStack>
            </Link>
          )}

          <Box w={"100%"} pt={10}>
            <Text color={"#9D9D9D"}>Others</Text>

            <Link as={RouterLink} to="/terms-and-conditions" w="100%">
              <VStack spacing={5} pt={5} w="100%" alignItems={"flex-start"}>
                <Flex w="100%" justifyContent={"center"} alignItems="center">
                  <Text color={"white"} fontWeight={500}>
                    Terms & Conditions
                  </Text>
                  <ChevronRightIcon ml="auto" color={"white"} fontSize="2xl" />
                </Flex>
                <Divider borderColor={"gray.600"} />
              </VStack>
            </Link>

            <Link href="/zillout-privacy-policy.html" w="100%">
              <VStack spacing={5} pt={5} w="100%" alignItems={"flex-start"}>
                <Flex w="100%" justifyContent={"center"} alignItems="center">
                  <Text color={"white"} fontWeight={500}>
                    Privacy Policy
                  </Text>
                  <ChevronRightIcon ml="auto" color={"white"} fontSize="2xl" />
                </Flex>
                <Divider borderColor={"gray.600"} />
              </VStack>
            </Link>

            <Link as={RouterLink} to="/refund-and-cancellation" w="100%">
              <VStack spacing={5} pt={5} w="100%" alignItems={"flex-start"}>
                <Flex w="100%" justifyContent={"center"} alignItems="center">
                  <Text color={"white"} fontWeight={500}>
                    Cancellation & Refund Policy
                  </Text>
                  <ChevronRightIcon ml="auto" color={"white"} fontSize="2xl" />
                </Flex>
                <Divider borderColor={"gray.600"} />
              </VStack>
            </Link>

            <Link as={RouterLink} to="/contact-us" w="100%">
              <VStack spacing={5} pt={5} w="100%" alignItems={"flex-start"}>
                <Flex w="100%" justifyContent={"center"} alignItems="center">
                  <Text color={"white"} fontWeight={500}>
                    Contact Us
                  </Text>
                  <ChevronRightIcon ml="auto" color={"white"} fontSize="2xl" />
                </Flex>
              </VStack>
            </Link>
          </Box>
        </VStack>
      )}

      <FooterNav sTabIndex={sTabIndex} />
    </Container>
  );
}
