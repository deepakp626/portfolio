import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import toast from 'react-hot-toast'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../firebase/firebase'

const Contact = () => {
  // const [inputs,setInput] = useState({name:"",email:"",message:"",})
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn,setDisableBtn] = useState(false)

  // const changeHandler = (e) => {
  //    setInput({[e.target.name]:e.target.value})
  // }

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true)
    try {
      await addDoc(collection(db,"contacts"),{
        name,email,message,
      })
      setName("")
      setEmail("")
      setMessage("")
      toast.success("Message Send");
      setDisableBtn(false)
    } catch (error) {
      console.log("Erroe",error);
      toast.error("Something is wrong")
    }

  };
  return (
    <>
      <Flex
        id="contact"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <VStack flex={"1"} justifyContent={"center"}>
          <Heading
            fontSize={{ base: "2rem", sm: "43px" }}
            letterSpacing={"5px"}
          >
            CONTACT ME
          </Heading>
          <Box paddingX={"1rem"}>
            <FormControl as={"form"}  onSubmit={submitHandler}>
              <FormLabel marginTop={"1rem"}>Your Name </FormLabel>
              <Input
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
                maxWidth={"auto"}
                type="text"
                placeholder="Enter Name"
              />
              <FormLabel marginTop={"1rem"}>Your Email </FormLabel>
              <Input
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                type="email"
                placeholder="Enter Email"
              />
              <FormLabel marginTop={"1rem"}>Message</FormLabel>
              <Textarea
                name="message"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                required
                placeholder="Here is a sample placeholder"
              />

              <Button
                disabled={disableBtn}
                width="full"
                marginTop={"32px"}
                type="submit"
                bg={"#F06D55"}
                _hover={{bg:"#F06D55"}}
              >
                Submit 
              </Button>
            </FormControl>
          </Box>
        </VStack>
        <Center  flex={"1"}>
          <Image width="370px" src="/contactImage/contactHello.png" />
        </Center>
      </Flex>
    </>
  );
};

export default Contact;

{
  /* <FormHelperText>We ll never share your email.</FormHelperText> */
}
