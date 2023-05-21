import { Flex, HStack, VStack, Image, Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { EventIcon, HomeIcon, ProfileIcon } from "./icons";

const FooterNav: React.FC<{
  sTabIndex: number;
}> = ({ sTabIndex }) => {
  const navigate = useNavigate();
  return (
    <Flex
      position={"fixed"}
      bottom={0}
      w="100%"
      background={"#111111"}
      h={"70px"}
      zIndex={1}
    >
      <HStack
        px={6}
        w="100%"
        alignItems="center"
        justifyContent={"space-around"}
      >
        <VStack
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => navigate("/home")}
        >
          <HomeIcon color={sTabIndex == 0 ? "#694DC7" : "#535353"} />
          <Text color={sTabIndex == 0 ? "#694DC7" : "#535353"} fontSize="sm">
            Explore
          </Text>
        </VStack>
        <VStack
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => navigate("/events")}
        >
          <EventIcon color={sTabIndex == 1 ? "#694DC7" : "#535353"} />

          <Text color={sTabIndex == 1 ? "#694DC7" : "#535353"} fontSize="sm">
            Events
          </Text>
        </VStack>
        <VStack
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => navigate("/user")}
        >
          <ProfileIcon color={sTabIndex == 2 ? "#694DC7" : "#535353"} />
          <Text color={sTabIndex == 2 ? "#694DC7" : "#535353"} fontSize="sm">
            Profile
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default FooterNav;
