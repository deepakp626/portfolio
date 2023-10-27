import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Education = () => {
  const education = [
    {
      course: "B.Tech IT Branch",
      passOut: "18-5-2023",
    },
    {
      course: "12th (PCM)",
      passOut: "5-4-2019",
    },
    {
      course: "10th MP Borad",
      passOut: "5-4-2017",
    },
  ];
  return (
    <>
      <Box
        id="education"
        padding={"1rem"}
        border={"4px"}
        margin={"2rem"}
        borderRadius={"1rem"}
        gap={"0.5rem"}
      >
        <Heading
          textAlign={"center"}
          fontSize={{ sm: "1.5rem", md: "2.5rem" }}
          mb={"0.5rem"}
        >
          Education
        </Heading>
        <Flex gap={"1rem"} flexWrap={"wrap"}>
          {education.map((edu, id) => (
              <Box
                key={id}
                paddingLeft={"1rem"}
                paddingRight={"3rem"}
                bg={"#292B46"}
                borderRadius={"0.375rem"}
                color={"white"}
                paddingY={"1rem"}
                flex={"1"}
              >
                <Heading fontSize={{ sm: "1rem" }}>{edu.course}</Heading>
                <Text>{edu.passOut}</Text>
              </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Education;
