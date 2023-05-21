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
  Stack,
} from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Footer from "../components/Footer";
import useScreenOrientation from "../hooks/useScreenOrientation";

export default function LandingPage() {
  const [isMobileView] = useMediaQuery("(max-width: 820px)");
  const orientation = useScreenOrientation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container maxW={"100%"} p="0" background="#111111" overflow={"hidden"}>
      {/* Section 1 */}
      <Flex w={"100%"} h={"100vh"} as={"section"}>
        <Flex
          w={"100%"}
          h="100%"
          justifyContent="flex-start"
          direction={
            orientation === "landscape-primary" ||
            orientation === "landscape-secondary"
              ? "row"
              : ["column", "column", "column", "row"]
          }
        >
          <Flex
            w={
              orientation === "landscape-primary" ||
              orientation === "landscape-secondary"
                ? "75%"
                : ["100%", "100%", "100%", "90%", "75%"]
            }
            h={
              orientation === "landscape-primary" ||
              orientation === "landscape-secondary"
                ? "100%"
                : ["60%", "60%", "60%", "90%", "100%"]
            }
            direction={"column"}
            pt={[8, 8, 8, 0]}
            pb={[28, 28, 32, 0]}
            px={[0, 0, 0, 32]}
            alignItems="flex-start"
            justifyContent="flex-start"
            background={[
              "linear-gradient(165.12deg, #1A191C -51.44%, #1A191C 39.7%, #2F1468 69.99%, rgba(114, 48, 255, 0.85) 96.8%)",
              null,
              null,
              "linear-gradient(122.04deg, #1A191C 1.99%, #1A191C 59.51%, #2F1468 78.63%, rgba(114, 48, 255, 0.85) 95.55%)",
            ]}
            transformOrigin={
              orientation === "landscape-primary" ||
              orientation === "landscape-secondary"
                ? "100% 0"
                : ["0", "0", "0", "100% 0"]
            }
            transform={
              orientation === "landscape-primary" ||
              orientation === "landscape-secondary"
                ? "skew(-8deg)"
                : [
                    "skewY(-8deg)",
                    "skewY(-8deg)",
                    "skewY(-8deg)",
                    "skew(-8deg)",
                  ]
            }
            zIndex={10}
          >
            <Box
              ml={[8, 8, 12, 8, 0]}
              transformOrigin={
                orientation === "landscape-primary" ||
                orientation === "landscape-secondary"
                  ? "100% 0"
                  : ["0", "0", "0", "100% 0"]
              }
              transform={
                orientation === "landscape-primary" ||
                orientation === "landscape-secondary"
                  ? "skew(8deg)"
                  : ["skewY(8deg)", "skewY(8deg)", "skewY(8deg)", "skew(8deg)"]
              }
            >
              <Image src="/images/logo.svg" my={[6, 10, 10, 20]} />
              <Box mt={[16]}>
                <Heading
                  fontSize={["xl", "xl", "3xl", "3xl"]}
                  fontWeight="600"
                  color="white"
                >
                  Highest Rated App For
                </Heading>
                <Heading
                  fontSize={["4xl", "4xl", "6xl", "6xl", "8xl"]}
                  fontWeight="700"
                  fontFamily={"Fugaz One"}
                  color="#A880FF"
                >
                  Pubs & Parties
                </Heading>
              </Box>
              <HStack spacing={4} pl={0}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.zillout.customer"
                  isExternal
                >
                  <Image
                    mt={[6, 6, 6, 12]}
                    src="/images/googlePlay.svg"
                    zIndex={"20"}
                    alt={"Get it on Google PlayStore"}
                    height={["10", "10", "10", "12"]}
                  />
                </Link>
                <Link href="https://forms.gle/FiuumvFBamSPVraL7" isExternal>
                  <Image
                    mt={[6, 6, 6, 12]}
                    ml={[0, 0, 0, 4]}
                    src="/images/appStore.svg"
                    zIndex={"20"}
                    alt={"Get it on Google PlayStore"}
                    height={["10", "10", "10", "12"]}
                  />
                </Link>
              </HStack>
            </Box>
          </Flex>
          {(!isMobileView ||
            orientation === "landscape-primary" ||
            orientation === "landscape-secondary") && (
            <Flex
              zIndex="10"
              pointerEvents={"none"}
              mt={["-12", "-12", "-12", "-10"]}
            >
              <Image
                src="/images/partyStrip.svg"
                transform={[
                  "translateX(-60%)",
                  "translateX(-60%)",
                  "translateX(-70%)",
                ]}
                height={["110%", "110%", "110%", "105%"]}
              />
            </Flex>
          )}
          {isMobileView &&
            orientation !== "landscape-primary" &&
            orientation !== "landscape-secondary" && (
              <Flex direction="column" pointerEvents={"none"} zIndex="10">
                <Image
                  src="/images/partyStripM.svg"
                  transform={[
                    "translateY(-67%)",
                    "translateY(-67%)",
                    "translateY(-67%)",
                  ]}
                />
              </Flex>
            )}
          <Flex
            h={"100%"}
            bgColor={"black"}
            ml={
              orientation === "landscape-primary" ||
              orientation === "landscape-secondary"
                ? ["-15%", "-15%", "-15%", "-18%"]
                : [0, 0, 0, "-18%"]
            }
            mt={
              orientation === "landscape-primary" ||
              orientation === "landscape-secondary"
                ? 0
                : ["-95%", "-95%", "-95%", 0]
            }
            pointerEvents={"none"}
          >
            <video
              width={"100%"}
              height={"100%"}
              poster="/images/videoFrame.png"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/videos/zilloutVideo.mp4?ngsw-bypass=true"
                type="video/mp4"
              />
            </video>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        position={"relative"}
        w={"100%"}
        height="150px"
        mt={[-40, -40, -40, -56]}
        zIndex={10}
        background="linear-gradient(180deg, rgba(13, 18, 24, 0) 0%, #0D1218 100%)"
        pointerEvents={"none"}
      ></Flex>
      {/* Section 2 */}
      <Flex
        as="section"
        w={"100%"}
        px={[6, 6, 10, 24]}
        py={14}
        zIndex={10}
        position="relative"
        background="#111111"
      >
        <Flex
          direction={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          w={"100%"}
          alignItems="center"
        >
          <VStack
            spacing={[10, 10, 10, 20]}
            alignItems="flex-start"
            w={["100%", "100%", "100%", "50%"]}
          >
            <Flex
              alignItems={["flex-start", "flex-start", "flex-start", "center"]}
              data-aos="fade-up"
            >
              <Image src="/images/explore.svg" />
              <VStack alignItems={"flex-start"} ml={4}>
                <Text
                  fontSize={"2xl"}
                  fontWeight="600"
                  color={"white"}
                  lineHeight="1.5rem"
                >
                  Explore Pubs
                </Text>
                <Text color={"whiteAlpha.600"}>
                  {" "}
                  Discover where you can vibe & chill with the gang all night
                  long.
                </Text>
              </VStack>
            </Flex>
            <Flex
              alignItems={["flex-start", "flex-start", "flex-start", "center"]}
              data-aos="fade-up"
            >
              <Image src="/images/bookEvent.svg" />
              <VStack alignItems={"flex-start"} ml={4}>
                <Text
                  fontSize={"2xl"}
                  fontWeight="600"
                  color={"white"}
                  lineHeight="1.5rem"
                >
                  Book Pub Events
                </Text>
                <Text color={"whiteAlpha.600"}>
                  {" "}
                  So many parties to choose from like never-ending Bollywood
                  nights, colorful techno nights & the craziest sundowners.
                </Text>
              </VStack>
            </Flex>
            <Flex
              alignItems={["flex-start", "flex-start", "flex-start", "center"]}
              data-aos="fade-up"
            >
              <Image src="/images/pay.svg" />
              <VStack alignItems={"flex-start"} ml={4}>
                <Text
                  fontSize={"2xl"}
                  fontWeight="600"
                  color={"white"}
                  lineHeight="1.5rem"
                >
                  Pay Cover Charges
                </Text>
                <Text color={"whiteAlpha.600"}>
                  {" "}
                  Let's get rid of the BS of hidden cover charges. Find out the
                  charges online and pay them at the entry.
                </Text>
              </VStack>
            </Flex>
            <Flex
              alignItems={["flex-start", "flex-start", "flex-start", "center"]}
              data-aos="fade-up"
            >
              <Image src="/images/entry.svg" />
              <VStack alignItems={"flex-start"} ml={4}>
                <Text
                  fontSize={"2xl"}
                  fontWeight="600"
                  color={"white"}
                  lineHeight="1.5rem"
                >
                  Guaranteed Entry
                </Text>
                <Text color={"whiteAlpha.600"}>
                  {" "}
                  Leave long queues behind, no denied entry. Your spot, your
                  gang, and your vibe; who the flock can stop you?
                </Text>
              </VStack>
            </Flex>
          </VStack>
          <Flex data-aos="zoom-in-left" data-aos-duration="2000">
            <Image
              src="/images/appPreview.svg"
              ml={[0, 0, 0, 28]}
              mt={[0, 0, 0, 10]}
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Section 3 */}
      <Footer />
    </Container>
  );
}
