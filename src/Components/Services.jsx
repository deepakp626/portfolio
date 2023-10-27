import {
    Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Services = () => {
  const payHandler = () => {
      alert("Contact me +91 6260009609")
  }
  return (
    <>
    <Box id="Services"  margin={{base:"1rem",}}  >
      <Heading textAlign={"center"} fontSize="2.5rem" mb={"1rem"}>
        Services
      </Heading>
      
      <Flex justifyContent={"center"} flexWrap={"wrap"}>
        <Card data-type="Card" maxW="20rem" border={"2px"} >
          <CardBody data-type="CardBody">
            <Image
              data-type="Image"
              src={"/Services/download.jpeg"}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              ></Image>
            <Stack data-type="Stack" mt="6" spacing="1">
              <Heading data-type="Heading" size="md">
                Web development
              </Heading>
              <Text data-type="Text">
                Giveing web development services 
              </Text>
              {/* <Text data-type="Text" color="blue.600" fontSize="2xl">
                1000 ₹
              </Text> */}
            </Stack>
          </CardBody>
          <CardFooter data-type="CardFooter"  paddingTop={"0px"}>
            <ButtonGroup data-type="ButtonGroup" spacing="1">
              <Button data-type="Button" variant="solid" colorScheme="blue"
              onClick={payHandler}>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
              
        </Card>
      </Flex>
    </Box>
    </>
  );
};

export default Services;
