import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, Flex, Heading, Image, Link, Text, Stack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"380px"}
        background={"#712FFF"}
        direction="column"
        alignItems="center"
        justifyContent={"center"}
      >
        <Text
          fontSize={["xl", "xl", "xl", "2xl"]}
          fontWeight="600"
          color={"whiteAlpha.700"}
          lineHeight={2}
        >
          Feel the future of a new culture
        </Text>
        <Heading
          fontSize={["2xl", "2xl", "2xl", "5xl"]}
          color="white"
          fontFamily={"Fugaz One"}
          lineHeight={1.5}
        >
          STEPOUT &nbsp;&nbsp;CHILLOUT &nbsp;&nbsp;ZILLOUT
        </Heading>
        <Link
          href="https://play.google.com/store/apps/details?id=com.zillout.customer"
          isExternal
        >
          <Image
            src="/images/googlePlay.svg"
            mt={2}
            zIndex={"10"}
            alt={"Get it on Google Play Store"}
            height={["60%", "60%", "60%", "70%"]}
          />
        </Link>
      </Flex>
      <Flex
        w={"100%"}
        alignItems={"center"}
        justifyContent={["center", "center", "center", "flex-start"]}
        p={[4, 4, 8]}
        direction={["column", "column", "column", "row"]}
      >
        <Flex alignItems={"center"}>
          <Image src="/images/logo.svg" height={4} ml={[2, 2, 2, 4]} />
          <Box
            w={"1px"}
            height="6"
            mx={[2, 2, 2, 4]}
            background="#FFFFFF33"
          ></Box>
          <Text
            color={"#9A9EA3"}
            fontWeight="600"
            fontSize={["xs", "xs", "xs", "md"]}
          >
            PEOPLE &nbsp;PARTIES &nbsp;PUBS
          </Text>
        </Flex>
        <Flex
          w={["100%", "100%", "100%", "65%", "75%"]}
          my={4}
          justifyContent={[
            "space-evenly",
            "space-evenly",
            "space-evenly",
            "space-between",
          ]}
          alignItems="center"
        >
          <Stack
            direction={["column", "column", "column", "row"]}
            w={["50%", "50%", "50%", "70%"]}
            spacing={[2, 2, 2, 4]}
          >
            <Link
              href="/zillout-privacy-policy.html"
              isExternal
              ml={["0", "0", "0", "32%"]}
            >
              <Text
                color={"white"}
                fontWeight="600"
                fontSize={["sm", "sm", "sm", "md"]}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {" "}
                Privacy Policy{" "}
              </Text>
            </Link>
            <RouterLink to={"/terms-and-conditions"} target="_blank">
              <Text
                color={"white"}
                fontWeight="600"
                fontSize={["sm", "sm", "sm", "md"]}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {" "}
                Terms & Conditions{" "}
              </Text>
            </RouterLink>
            <RouterLink to={"/refund-and-cancellation"} target="_blank">
              <Text
                color={"white"}
                fontWeight="600"
                fontSize={["sm", "sm", "sm", "md"]}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Refund & Cancellation{" "}
              </Text>
            </RouterLink>
          </Stack>
          <Flex>
            {/* <Link href='https://www.linkedin.com/company/zillout/' target={"_blank"}>
                            <Image
                                src="/images/linkedin.png"
                                height={"25px"}
                            />
                        </Link> */}
            <Link href="https://www.facebook.com/zillout" target={"_blank"}>
              <Image src="/images/facebook.svg" />
            </Link>
            <Link
              href="https://www.instagram.com/zillout_squad/"
              target={"_blank"}
            >
              <Image src="/images/Instagram.svg" mx={[2, 2, 2, 5]} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
