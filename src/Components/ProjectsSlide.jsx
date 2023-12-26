import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProjectsSlide = () => {
  const projects = [
    {
      title: "Youtube Clone",
      image: "/mega_project/youtube.png",
      code: "https://github.com/deepakp626/youtube-clone",
      live: "https://youtubeclone626.netlify.app/",
      description:
        "In this project, I created a clone of my youtube with the following Technoloyy Like React-JS, Tailwind, React-Reduc and Youtube API  use this youtube clone and enjoy .",
    },
    {
      title: "To do Auth with  firebase",
      image: "/mega_project/to_do.png",
      code: "https://github.com/deepakp626/todo-with-redux-and-auth-with-firebase",
      live: "https://todo-with-redux-auth-with-firebase.netlify.app/",
      description:
        "In this project i created to do with React-JS React-Redux for state management and firebase for authtication and hosted in Netlify.",
    },
    {
      title: "Portfolio",
      image: "/mega_project/portfolio.png",
      code: "/",
      live: "/",
      description:
        "This is my portfolio created with React-JS and Chakra-UI  .",
    },
  ];
  return (
    <>
      <Heading
        id="work"
        textAlign={"center"}
        fontSize={"2rem"}
        fontWeight={"700"}
        letterSpacing={"6px"}
        textDecoration={"underline"}
      >
        Works
      </Heading>
      <Flex
        justifyContent={"center"}
        bg={"#292B46"}
        paddingY={"1rem"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={"1rem"}
      >
        {projects.map((project, id) => (
          <HStack
            key={id}
            // padding={"1rem"}
            gap={"1.5rem"}
            // width={"100%"}
            justifyContent={"center"}
            flexDirection={{ base: "column", md: "row" }}
              >
            <Image
              src={project.image}
              alt={project.title}
              maxWidth={{ base: "18rem", sm: "22rem" }}
              maxHeight="18rem"
              borderRadius={"1.25rem"}
            />
            <VStack maxWidth={"21rem"} color={"white"}>
              <Heading fontSize={"1.5rem"} fontWeight="700">
                {project.title}
              </Heading>
              <Text fontSize={"1rem"} fontWeight={"normal"}>
                {project.description}
              </Text>
              <ButtonGroup>
                <Button
                  as={Link}
                  href={project.live}
                  target={"_blank"}
                  border={"2px solid black"}
                >
                  Live
                </Button>
                <Button
                  as={Link}
                  href={project.code}
                  target={"_blank"}
                  border={"2px solid black"}
                >
                  Code
                </Button>
              </ButtonGroup>
            </VStack>
          </HStack>
        ))}
      </Flex>
    </>
  );
};

export default ProjectsSlide;
