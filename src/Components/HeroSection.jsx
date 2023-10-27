import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import SocialMidea from "./SocialMidea";
import Typewriter from "typewriter-effect";
// import jspdf from "jspdf";
import pdf from "/Resume/deepak_resume.pdf";
import toast from "react-hot-toast";

const HeroSection = () => {
  // download resume
  const pdfData = pdf;
  const downloadResume = () => {
    var link = document.createElement("a");
    link.href = pdfData;                       // pdf path
    link.download = "deepakPrajapat.pdf";      // pdf name
    link.dispatchEvent(new MouseEvent("click"));

    toast.success("Resume Downloaded")
  };
  return (
    <>
      <Flex
        id="home"
        justifyContent={"center"}
        gap={{ base: "1rem", md: "5rem" }}
        align="center"
        // height={"100vh"}
        height={{ md: "85vh" }}
        // border={"4px"}
        // borderColor={"blue.400"}
        flexWrap={"wrap-reverse"}
      >
        <Stack gap={"1rem"}>
          <Box>
            <Heading fontSize={{ base: "4rem", md: "5rem" }} fontWeight={"500"}>
              Deepak
            </Heading>
            <Heading fontSize={{ base: "4rem", lg: "5rem" }} fontWeight={"500"}>
              Prajapat
            </Heading>
          </Box>

          <Text mt={"1rem"} fontSize={"1.5rem"} fontWeight={"400"}>
            <Typewriter
              class
              options={{
                strings: ["A developer", "ReactJS developer", "A freelancer"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </Text>

          <HStack justifyContent={"space-evenly"}>
            <SocialMidea />
          </HStack>

          <ButtonGroup
            marginTop={"5px"}
            // border={"2px"}
            // borderColor={"red"}
          >
            <Button
              as={Link}
              href="mailto:deepakprajapat62600@gmail.com"
              padding={"0.5rem 1.5rem"}
              bgColor={"#F06D55"}
              _hover={{ bg: "#F06D55", boxShadow: "0px 0px 10px" }}
            >
              Email
            </Button>
            <Button
              padding={"0.5rem 1.5rem"}
              bgColor={"#F06D55"}
              _hover={{ bg: "#F06D55", boxShadow: "0px 0px 10px" }}
              onClick={downloadResume}
            >
              Download CV
            </Button>
          </ButtonGroup>

          <Box>
            <Heading fontSize={"2rem"}>Contacts</Heading>
            <Text>deepakprajapat62600@gmail.com</Text>
            <Text>+91 6260009609</Text>
          </Box>
        </Stack>
        <Box
          // width={"400px"}
          // height={"400px"}
          borderRadius="full"
          overflow={"hidden"}
        >
          <Image
            width={{ base: "19rem", md: "350px" }}
            height={{ base: "19rem", md: "350px" }}
            src={"/profile/deepak.jpeg"}
            alt={"image"}
          />
        </Box>
      </Flex>
    </>
  );
};

export default HeroSection;
