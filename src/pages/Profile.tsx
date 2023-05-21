import React from "react";
import { Container, Flex, VStack, Text } from "@chakra-ui/react";
import BackNavigation from "../components/BackNavigation";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let storedUser = localStorage.getItem("user");
  let user = storedUser && JSON.parse(storedUser);

  const navigate = useNavigate();
  return (
    <Container
      maxW={"100%"}
      h="100vh"
      p="0"
      background="#111111"
      overflow={"hidden"}
    >
      <BackNavigation heading="Account Details" />
      {user && (
        <>
          {" "}
          <VStack alignItems={"flex-start"} px={8} py={4} spacing={0} mt={20}>
            <Text color={"#9D9D9D"} fontSize="sm">
              Name
            </Text>
            <Text color={"white"} fontWeight={600}>
              {user.name}
            </Text>
          </VStack>
          <VStack alignItems={"flex-start"} px={8} py={4} spacing={0}>
            <Text color={"#9D9D9D"} fontSize="sm">
              Email
            </Text>
            <Text color={"white"} fontWeight={600}>
              {user.email}
            </Text>
          </VStack>
          <VStack alignItems={"flex-start"} px={8} py={4} spacing={0}>
            <Text color={"#9D9D9D"} fontSize="sm">
              Phone
            </Text>
            <Text color={"white"} fontWeight={600}>
              {localStorage.getItem("phone_number")}
            </Text>
          </VStack>
          <Flex
            w="100%"
            p={8}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <Text color={"#694DC7"} fontWeight={600}>
              Log Out
            </Text>
          </Flex>
        </>
      )}
    </Container>
  );
}
