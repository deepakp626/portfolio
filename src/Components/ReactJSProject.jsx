import {
  Button,
  ButtonGroup,
  Card,
  Flex,
  Heading,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";

const ReactJSProject = () => {
  const project = [
    {
      title: "Youtube Clone",
      image: "/mega_project/youtube.png",
      code: "https://github.com/deepakp626/youtube-clone",
      live: "https://clone-e30a4.web.app/",
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
      description: "This is my portfolio created with React-JS and Chakra-UI.",
    },
  ];
  return (
    <>
      <Flex flexWrap={"wrap"} justifyContent={"space-evenly"} rowGap={"0.5rem"}>
        {project.map((project, id) => (
          <Card
            key={id}
            paddingY={"1rem"}
            paddingX={"1rem"}
            border={"1px"}
            borderColor={"black"}
          >
            <VStack>
              <Image
                borderRadius={"2rem"}
                width={"16rem"}
                height={"16rem"}
                src={project.image}
                alt={project.title}
              />
              <VStack>
                <Heading fontSize={"1.5rem"} fontWeight="600">
                  {project.title}
                </Heading>
                <ButtonGroup>
                  <Button
                    as={Link}
                    href={project.code}
                    border={"2px"}
                    borderColor={"#A3A3A3"}
                    borderRadius={"2rem"}
                    fontSize={"0.8rem"}
                    fontWeight={"600"}
                    bg={"white"}
                    paddingX={"2.65rem"}
                  >
                    Live
                  </Button>
                  <Button
                    as={Link}
                    href={project.code}
                    border={"2px"}
                    borderColor={"#A3A3A3"}
                    borderRadius={"2rem"}
                    fontSize={"0.8rem"}
                    fontWeight={"600"}
                    bg={"white"}
                    paddingX={"2.65rem"}
                  >
                    Code
                  </Button>
                </ButtonGroup>
              </VStack>
            </VStack>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default ReactJSProject;
