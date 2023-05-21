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
import { GoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import API from "../helpers/api";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC<{
  bookingDetails?: any;
}> = ({ bookingDetails }) => {
  const [userDetails, setUserDetails] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("userId")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem("user", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  const login = async (user: any) => {
    const { data, status } = await API.post<any>("/api/v1/rbzo/users", {
      email: user.email,
      name: user.name,
      image: user.picture,
    });

    if (status === 200) {
      localStorage.setItem("userId", data.data.id);
      navigate("/verify-phone");
    }
  };

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      background="#6841D8"
      p={0}
      overflow={"hidden"}
    >
      <Flex
        alignItems={"center"}
        justifyContent="center"
        w="100%"
        mt={16}
        direction={"column"}
      >
        <Image src="/images/logo.svg" height={10} ml={[2, 2, 2, 4]} />
        <Text color={"white"} w="60%" align={"center"} py={4}>
          Bangalore's most trusted for Pubs & Parties
        </Text>
        <Flex mt={8} direction="column" w="100%">
          <Image src="/images/signinBg.svg" p={12} />
          <Image src="/images/entryH.svg" w="70%" mt={-36} ml={32} />
        </Flex>
        <Flex mb={4} mt={16}>
          <GoogleLogin
            auto_select={false}
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                localStorage.setItem("token", credentialResponse.credential);
                setUserDetails(jwt_decode(credentialResponse.credential));
                login(jwt_decode(credentialResponse.credential));
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </Flex>
        ;
      </Flex>
    </Container>
  );
};

export default SignIn;
