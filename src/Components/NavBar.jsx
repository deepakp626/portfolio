import {
  Flex,
  Heading,
  HStack,
  Text,
  Box,
  Link,
  Button,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
// import Model from "./Model";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        paddingY="0.5rem"
        paddingX="0.3rem"
        spacer="0.5rem"
        justifyContent={"space-around"}
        position={"sticky"}
        top={"0px"}
        zIndex={"1"}
        width={"full"}
        boxShadow={"0px 0px 10px 0px "}
        bg={"#1a1c1d"}
        color={"white"}
      >
        <Heading>Deepak</Heading>

        <HStack
          cursor={"pointer"}
          fontWeight={"medium"}
          display={{ base: "none", md: "flex" }}
          fontSize={{ md: "0.7rem", lg: "medium" }}
          gap={"1.99rem"}
          letterSpacing={"1px"}
          transition={"all 0.3s"}
          transitionDuration={"0.3s"}
        >
          <Text as={Link} href="#home">
            Home
          </Text>
          <Text as={Link} href="#work">
            Work
          </Text>
          <Text as={Link} href="#projects">
            Projects
          </Text>
          <Text as={Link} href="#education">
            Education
          </Text>
          {/* <Text as={Link} href="">Experience</Text> */}
          <Text as={Link} href="#Services">
            Services
          </Text>
          {/* <Text as={Link} href="">Testimonial</Text> */}
          <Text as={Link} href="#contact">
            Contact
          </Text>
        </HStack>

        <Box display={{ base: "none", md: "flex" }}>
          <Link href="mailto:deepakprajapat62600@gmail.com" target="_blank">
            <Button
              padding={"0.5rem 2rem"}
              _hover={{ bg: "black", color: "white" }}
              borderColor={"black"}
              border={"1px"}
            >
              Email
            </Button>
          </Link>
          {/* <Model /> */}
        </Box>
        <Box display={{ base: "flex", md: "none" }}>
          <IconButton onClick={onOpen}>
            <AiOutlineMenu width={"40px"} height={"40px"} />
          </IconButton>
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Deepak Prajapat</DrawerHeader>

          <DrawerBody>
            <HStack
              cursor={"pointer"}
              fontWeight={"medium"}
              display={"flex" }
              fontSize={{ md: "0.7rem", lg: "medium" }}
              gap={"1.99rem"}
              letterSpacing={"1px"}
              transition={"all 0.3s"}
              transitionDuration={"0.3s"}
              flexDirection={"column"}
            >
              <Text as={Link} href="#home" onClick={onClose}>
                Home
              </Text>
              <Text as={Link} href="#work" onClick={onClose}>
                Work
              </Text>
              <Text as={Link} href="#projects" onClick={onClose}>
                Projects
              </Text>
              <Text as={Link} href="#education" onClick={onClose}>
                Education
              </Text>
              {/* <Text as={Link} href="">Experience</Text> */}
              <Text as={Link} href="#Services" onClick={onClose}>
                Services
              </Text>
              {/* <Text as={Link} href="">Testimonial</Text> */}
              <Text as={Link} href="#contact" onClick={onClose}>
                Contact
              </Text>
            <Box >
            <Link href="mailto:deepakprajapat62600@gmail.com" >
            <Button
              padding={"0.5rem 2rem"}
              _hover={{ bg: "black", color: "white" }}
              borderColor={"black"}
              border={"1px"}
              mx={"auto"}
              onClick={onClose}
            >
              Email
            </Button>
          </Link>
            </Box>
            </HStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
