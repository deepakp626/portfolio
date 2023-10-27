import { Avatar, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import SocialMidea from "./SocialMidea"

const Footer = () => {
  return (
    <>
        <Flex as={"footer"}  padding={"2rem"} justifyContent={"space-evenly"} alignContent={"center"}
        flexWrap={"wrap"}>
            <VStack   borderLeft={"2px"} borderRight={"2px"} paddingX={"2rem"} >
                <Avatar   src="../../public/profile/deepak.jpeg"  />
                <Heading fontSize={"1rem"}>Deepak Prajapat</Heading>
                <Text textAlign={"center"}  fontSize={"1rem"}>Motivation is temporary, but discipline last forever</Text>
            </VStack>
            <VStack marginTop={{base:"1rem"}}>
                <Heading fontSize={"1.5rem"}>Social Media</Heading>
                <HStack>
                    <SocialMidea />
                </HStack>
            </VStack>
        </Flex>
    </>
  )
}

export default Footer