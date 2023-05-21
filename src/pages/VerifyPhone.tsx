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
  InputGroup,
  InputLeftAddon,
  Input,
  PinInput,
  PinInputField,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import BackNavigation from "../components/BackNavigation";
import { redirect, useNavigate } from "react-router-dom";
import { booking_details } from "./ConfirmBooking";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

const VerifyPhone: React.FC<{
  bookingDetails?: any;
}> = ({ bookingDetails }) => {
  let storedUser = localStorage.getItem("user");
  let user = storedUser && JSON.parse(storedUser);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<any>(null);
  const [userPhone, setUserPhone] = useState<string>("");
  const [otpDisabled, setOtpDisabled] = useState<boolean>(true);
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [verifyDisabled, setVerifyDisabled] = useState<boolean>(true);
  const [otp, setOtp] = useState<string>();
  const [final, setfinal] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (localStorage.getItem("is_phone_verified")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem("user", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  useEffect(() => {
    if (otp && otp.length === 6) {
      setVerifyDisabled(false);
    }
  }, [otp]);

  const sendOtp = async () => {
    if (!userPhone || userPhone.length < 10) return;

    setIsLoading(true);
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    );
    try {
      recaptchaVerifier.render();
      const result = await signInWithPhoneNumber(
        auth,
        `+91${userPhone}`,
        recaptchaVerifier
      );
      if (result) {
        setfinal(result);
        recaptchaVerifier.clear();
        if (element && element.current) {
          element.current.innerHTML = `<div id="recaptcha-container"></div>`;
        }
        setIsOtpSent(true);
        setIsLoading(false);
      } else {
        recaptchaVerifier.clear();
        if (element && element.current) {
          element.current.innerHTML = `<div id="recaptcha-container"></div>`;
        }
        setIsLoading(false);
      }
    } catch (err) {
      recaptchaVerifier.clear();
      if (element && element.current) {
        element.current.innerHTML = `<div id="recaptcha-container"></div>`;
      }
      setIsLoading(false);
    }
  };

  const verifyNo = () => {
    setIsLoading(true);
    if (final && otp && otp.length === 6) {
      final
        .confirm(otp)
        .then((result: any) => {
          localStorage.setItem("is_phone_verified", "true");
          localStorage.setItem("phone_number", userPhone);

          setIsLoading(false);
          if (
            booking_details &&
            booking_details.eventId &&
            booking_details.slotNo &&
            booking_details.counter
          ) {
            navigate(
              `/event/booking/confirm/${booking_details.eventId}/${booking_details.slotNo}/${booking_details.counter}`
            );
          } else {
            navigate("/");
          }
        })
        .catch((err: any) => {
          console.log(err);

          setIsLoading(false);
          alert("Incorrect OTP");
        });
    }
  };

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      background="#111111"
      p={0}
      overflow={"hidden"}
    >
      <BackNavigation />
      <Stack maxWidth="100%" p={2} my={20}>
        <Text
          fontSize="md"
          fontWeight={500}
          color="#8155FE"
          maxWidth="100%"
          pl={4}
        >
          Hi {user.name}
        </Text>
        <VStack py={2} px={4} alignItems="left">
          <Text
            fontSize={"20px"}
            fontWeight={600}
            color="white"
            maxWidth="100%"
          >
            Let's verify your phone number
          </Text>
          <Text fontSize="12px" color="#9D9D9D" my={4} maxWidth="100%">
            We need to confirm that you're not a drunk alien planning a night
            out
          </Text>
        </VStack>
        {!isOtpSent ? (
          <>
            <InputGroup mt={4} p={4}>
              <InputLeftAddon children="+91" textColor={"#878787"} />
              <Input
                type="tel"
                placeholder="Phone number"
                background={"white"}
                onChange={(ev) => {
                  if (ev.target.value.length === 10) {
                    setOtpDisabled(false);
                    setUserPhone(ev.target.value);
                  }
                }}
              />
            </InputGroup>
          </>
        ) : (
          <Flex direction={"column"} p={4}>
            <Text color={"white"}>OTP was sent to +91-{userPhone}</Text>
            <Flex pt={4} gap={4} w="100%" justifyContent={"flex-start"}>
              <PinInput otp value={otp} onChange={(ev) => setOtp(ev)}>
                <PinInputField background={"white"} w={"48px"} h="56px" />
                <PinInputField background={"white"} w={"48px"} h="56px" />
                <PinInputField background={"white"} w={"48px"} h="56px" />
                <PinInputField background={"white"} w={"48px"} h="56px" />
                <PinInputField background={"white"} w={"48px"} h="56px" />
                <PinInputField background={"white"} w={"48px"} h="56px" />
              </PinInput>
            </Flex>
            <HStack mt={10}>
              <Text color={"white"}>Didn’t receive OTP yet?</Text>
              <Link
                onClick={() => {
                  sendOtp();
                }}
                textColor="#8155FE"
              >
                Resend OTP
              </Link>
            </HStack>
          </Flex>
        )}
      </Stack>
      <Box ref={element} visibility="hidden">
        <div id="recaptcha-container"></div>
      </Box>
      <Flex position={"fixed"} bottom={0} w="100%">
        {isOtpSent ? (
          <Button
            w="100%"
            h="60px"
            mt={6}
            borderRadius={0}
            background={"#8155FE"}
            textColor="white"
            isDisabled={verifyDisabled}
            onClick={() => verifyNo()}
          >
            {isLoading ? <Spinner color="black" /> : "Verify"}
          </Button>
        ) : (
          <Button
            w="100%"
            h="60px"
            mt={6}
            borderRadius={0}
            background={"#8155FE"}
            textColor="white"
            isDisabled={otpDisabled}
            onClick={() => sendOtp()}
          >
            {isLoading ? <Spinner color="black" /> : "Send OTP"}
          </Button>
        )}
      </Flex>
    </Container>
  );
};

export default VerifyPhone;
